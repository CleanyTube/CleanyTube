import axios from 'axios'
import { Logger } from '../logger'

export class SearchListScrapper {
  private apiKey?: string
  private logger = new Logger('SearchListScrapper')
  private useLogger = false

  enableLogger() {
    this.useLogger = true
  }

  disableLogger() {
    this.useLogger = false
  }

  async getData(search: string) {
    const res = { results: [] }
    let url = `https://www.youtube.com/results?search_query=${encodeURIComponent(
      search
    )}`
    const { data: html } = await axios.get<string>(url, {
      headers: {
        authority: 'www.youtube.com',
        accept:
          'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
        'cache-control': 'max-age=0',
        dnt: '1',
        'sec-ch-ua':
          '"Google Chrome";v="113", "Chromium";v="113", "Not-A.Brand";v="24"',
        'sec-ch-ua-arch': '"x86"',
        'sec-ch-ua-bitness': '"64"',
        'sec-ch-ua-full-version': '"113.0.5653.0"',
        'sec-ch-ua-full-version-list':
          '"Google Chrome";v="113.0.5653.0", "Chromium";v="113.0.5653.0", "Not-A.Brand";v="24.0.0.0"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-model': '""',
        'sec-ch-ua-platform': '"Linux"',
        'sec-ch-ua-platform-version': '"6.2.0"',
        'sec-ch-ua-wow64': '?0',
        'sec-fetch-dest': 'document',
        'sec-fetch-mode': 'navigate',
        'sec-fetch-site': 'none',
        'sec-fetch-user': '?1',
        'service-worker-navigation-preload': 'true',
        'upgrade-insecure-requests': '1',
        'user-agent':
          'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36',
      },
    })

    this.extractKey(html)

    let match = html.match(/ytInitialData[^{]*(.*?);\s*<\/script>/s)
    if (match && match.length <= 1) {
      match = html.match(
        /ytInitialData"[^{]*(.*);\s*window\["ytInitialPlayerResponse"\]/s
      )
    }

    const data = JSON.parse(match?.[1] ?? '{}')
    const contents =
      data.contents?.twoColumnSearchResultsRenderer?.primaryContents
        ?.sectionListRenderer?.contents ?? []

    this.parseJsonFormat(contents, res)

    return res as unknown as any
  }

  private extractKey(html: string) {
    this.apiKey = html.match(/"innertubeApiKey":"([^"]*)/)?.[1]
  }

  /**
   * Parse youtube search results from json sectionList array and add to json result object
   * @param {Array} contents - The array of sectionLists
   * @param {Object} json - The object being returned to caller
   */
  private parseJsonFormat(contents: any, json: any) {
    contents.forEach((sectionList: any) => {
      try {
        if (sectionList.hasOwnProperty('itemSectionRenderer')) {
          sectionList.itemSectionRenderer.contents.forEach((content: any) => {
            try {
              if (content.hasOwnProperty('channelRenderer')) {
                json.results.push(
                  this.parseChannelRenderer(content.channelRenderer)
                )
              }
              if (content.hasOwnProperty('videoRenderer')) {
                json.results.push(
                  this.parseVideoRenderer(content.videoRenderer)
                )
              }
              if (content.hasOwnProperty('radioRenderer')) {
                json.results.push(
                  this.parseRadioRenderer(content.radioRenderer)
                )
              }
              if (content.hasOwnProperty('playlistRenderer')) {
                json.results.push(
                  this.parsePlaylistRenderer(content.playlistRenderer)
                )
              }
            } catch (ex) {
              if (this.useLogger) {
                this.logger.log('Failed to parse renderer:', ex)
                this.logger.log(content)
              }
            }
          })
        } else if (sectionList.hasOwnProperty('continuationItemRenderer')) {
          json['nextPageToken'] =
            sectionList.continuationItemRenderer.continuationEndpoint.continuationCommand.token
        }
      } catch (ex) {
        if (this.useLogger) {
          this.logger.log('Failed to read contents for section list:', ex)
          this.logger.log(sectionList)
        }
      }
    })
  }

  /**
   * Parse a channelRenderer object from youtube search results
   * @param {object} renderer - The channel renderer
   * @returns object with data to return for this channel
   */
  private parseChannelRenderer(renderer: any) {
    let channel = {
      id: renderer.channelId,
      title: renderer.title.simpleText,
      url: `https://www.youtube.com${renderer.navigationEndpoint.commandMetadata.webCommandMetadata.url}`,
      snippet: renderer.descriptionSnippet
        ? renderer.descriptionSnippet.runs.reduce(this.combineString, '')
        : '',
      thumbnail_src:
        renderer.thumbnail.thumbnails[renderer.thumbnail.thumbnails.length - 1]
          .url,
      video_count: renderer.videoCountText
        ? renderer.videoCountText.runs.reduce(this.combineString, '')
        : '',
      subscriber_count: renderer.subscriberCountText
        ? renderer.subscriberCountText.simpleText
        : '0 subscribers',
      verified:
        (renderer.ownerBadges &&
          renderer.ownerBadges.some(
            (badge: any) =>
              badge.metadataBadgeRenderer.style.indexOf('VERIFIED') > -1
          )) ||
        false,
    }

    return { channel }
  }

  /**
   * Parse a playlistRenderer object from youtube search results
   * @param {object} renderer - The playlist renderer
   * @returns object with data to return for this playlist
   */
  private parsePlaylistRenderer(renderer: any) {
    let thumbnails =
      renderer.thumbnailRenderer.playlistVideoThumbnailRenderer.thumbnail
        .thumbnails
    let playlist = {
      id: renderer.playlistId,
      title: renderer.title.simpleText,
      url: `https://www.youtube.com${renderer.navigationEndpoint.commandMetadata.webCommandMetadata.url}`,
      thumbnail_src: thumbnails[thumbnails.length - 1].url,
      video_count: renderer.videoCount,
    }

    let uploader = {
      username: renderer.shortBylineText.runs[0].text,
      url: `https://www.youtube.com${renderer.shortBylineText.runs[0].navigationEndpoint.commandMetadata.webCommandMetadata.url}`,
    }

    return { playlist: playlist, uploader: uploader }
  }

  /**
   * Parse a radioRenderer object from youtube search results
   * @param {object} renderer - The radio renderer
   * @returns object with data to return for this mix
   */
  private parseRadioRenderer(renderer: any) {
    let radio = {
      id: renderer.playlistId,
      title: renderer.title.simpleText,
      url: `https://www.youtube.com${renderer.navigationEndpoint.commandMetadata.webCommandMetadata.url}`,
      thumbnail_src:
        renderer.thumbnail.thumbnails[renderer.thumbnail.thumbnails.length - 1]
          .url,
      video_count: renderer.videoCountText.runs.reduce(this.combineString, ''),
    }

    let uploader = {
      username: renderer.shortBylineText
        ? renderer.shortBylineText.simpleText
        : 'YouTube',
    }

    return { radio: radio, uploader: uploader }
  }

  /**
   * Parse a videoRenderer object from youtube search results
   * @param {object} renderer - The video renderer
   * @returns object with data to return for this video
   */
  private parseVideoRenderer(renderer: any) {
    let video = {
      id: renderer.videoId,
      title: renderer.title.runs.reduce(this.combineString, ''),
      url: `https://www.youtube.com${renderer.navigationEndpoint.commandMetadata.webCommandMetadata.url}`,
      duration: renderer.lengthText ? renderer.lengthText.simpleText : 'Live',
      snippet: renderer.descriptionSnippet
        ? renderer.descriptionSnippet.runs.reduce(
            (a: any, b: any) => a + (b.bold ? `<b>${b.text}</b>` : b.text),
            ''
          )
        : '',
      upload_date: renderer.publishedTimeText
        ? renderer.publishedTimeText.simpleText
        : 'Live',
      thumbnail_src:
        renderer.thumbnail.thumbnails[renderer.thumbnail.thumbnails.length - 1]
          .url,
      views: renderer.viewCountText
        ? renderer.viewCountText.simpleText ||
          renderer.viewCountText.runs.reduce(this.combineString, '')
        : renderer.publishedTimeText
        ? '0 views'
        : '0 watching',
    }

    let uploader = {
      username: renderer.ownerText.runs[0].text,
      url: `https://www.youtube.com${renderer.ownerText.runs[0].navigationEndpoint.commandMetadata.webCommandMetadata.url}`,
      verified: false,
    }
    uploader.verified =
      (renderer.ownerBadges &&
        renderer.ownerBadges.some(
          (badge: any) =>
            badge.metadataBadgeRenderer.style.indexOf('VERIFIED') > -1
        )) ||
      false

    return { video: video, uploader: uploader }
  }

  /**
   * Combine array containing objects in format { text: "string" } to a single string
   * For use with reduce function
   * @param {string} a - Previous value
   * @param {object} b - Current object
   * @returns Previous value concatenated with new object text
   */
  private combineString(a: any, b: any) {
    return a + b.text
  }
}
