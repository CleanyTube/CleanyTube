import axios from 'axios'

export class YouTubeClient {
  apiKey?: string

  async search(search: string) {
    try {
      const res = { results: [] }
      let url = `https://www.youtube.com/results?search_query=${encodeURIComponent(
        search
      )}`
      const { data: html } = await axios.get<string>(url, {
        headers: {
          // cookie:
          //   'DEVICE_INFO=ChxOekU1T0RNMk5EQTBOamczTmpNM05EUTJOQT09EPbzlp8GGPbzlp8G; VISITOR_INFO1_LIVE=3LPlf0b_5TQ; _gcl_au=1.1.1771326242.1675999735; _ga=GA1.1.890270244.1676640624; _ga_VCGEPY40VB=GS1.1.1676640624.1.1.1676640705.0.0.0; SID=TwhXnII8BDGNqRrTGf6F2RhvcL9N6tcgyygdzBPf70jWmBF9wzOOAj4CihMPLOnic6kGIw.; __Secure-1PSID=TwhXnII8BDGNqRrTGf6F2RhvcL9N6tcgyygdzBPf70jWmBF9yLmX44U83vNtNeQI5zQ1gg.; __Secure-3PSID=TwhXnII8BDGNqRrTGf6F2RhvcL9N6tcgyygdzBPf70jWmBF97MbK8NGCpY__R49rnuX45Q.; HSID=AEjpmu8JZrH277ubO; SSID=Abf1OgnDcp16TEiAW; APISID=F9YHmumTpnBc2sZ-/ADdEFABAm2duSmnUq; SAPISID=V8oNz-r9K92K_u3Z/AOEC2tJtf-E8-R_90; __Secure-1PAPISID=V8oNz-r9K92K_u3Z/AOEC2tJtf-E8-R_90; __Secure-3PAPISID=V8oNz-r9K92K_u3Z/AOEC2tJtf-E8-R_90; PREF=f6=480&tz=America.Sao_Paulo&f7=140&volume=5&autoplay=true&repeat=NONE&f5=30000; LOGIN_INFO=AFmmF2swRQIhAK8Cxw_vv9AqzUy6BPmOb6bcVZWgzoIaagDYMI_q2Ex3AiAiV7j2q7zs6c5gf0phqL9097HOeww8dC4u2AgA3KuuHg:QUQ3MjNmeGJTMlh6cFhYbUpfNjBWemZjdFpZd1hNQXJ0aGpPUUk1UHFzZEZmWXcwS0d2bTJSR0pmMTYxOTB2emVNWDB2Z1MzSHpqdVlYcEZYYmlQM0oxVXhPS3pBM2pCd0RCbVBMQXZDclhOQ3VRY2hZSmVsZXpPRzVvcjRyQzBuYjFpUjdEUmxiMGVKVE1adTFRbzFlRzlmc29rc2tXOE9n; YSC=R3kvgjagheE; amp_a0683b=6iG8eLJEXKXHJc7QdYNUF8.c21saTkxdHhxeTlnaA==..1gs1venj0.1gs1venj0.0.0.0; SIDCC=AFvIBn9SbNUwv2e3mWxek3WakOOMnEYvoBn2QBNLqz8VE23_zfs3SoRGQv6v9qfXMhj-g93BETU; __Secure-1PSIDCC=AFvIBn_5jVVQiHWnurUB_XOR4jVH2o1e33oGBMrqPxQgJBelMe2NlYCzWLq5qG4QG-C4nRItHg; __Secure-3PSIDCC=AFvIBn_BPca7SJJySXX7ctcfl3MQjvaPPShLKaFMHkYJVy3ywizsFrfdCC9iH25uHeUCvPocQfw',
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
          // 'x-client-data':
          //   'CKS1yQEIhbbJAQimtskBCKydygEIo//KAQiVocsBCIP+zAEIv//MAQiHhM0BCJiKzQEI+IrNAQiZjM0BCJCNzQEI5Y7NAQjSkc0BCOuRzQEIgZPNAQjpk80BCL+UzQEI+ZTNAQiDlc0BCKmWzQEI7JbNAQitms0BCLeazQEI1JrNAQjhm80BCMWczQEIyJzNAQjinM0BCIOdzQEIwZ3NAQiVns0BGMiTzQE=',
        },
      })

      this.extractKey(html)

      // await axios.post('http://192.168.6.108:3000/api/hello', {
      //   html,
      // })

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
    } catch (err) {
      console.log(err)
    }
  }

  private extractKey(html: string) {
    this.apiKey = html.match(/"innertubeApiKey":"([^"]*)/)?.[1]
  }

  /**
   * Parse youtube search results from json sectionList array and add to json result object
   * @param {Array} contents - The array of sectionLists
   * @param {Object} json - The object being returned to caller
   */
  parseJsonFormat(contents: any, json: any) {
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
              console.log('Failed to parse renderer:', ex)
              console.log(content)
            }
          })
        } else if (sectionList.hasOwnProperty('continuationItemRenderer')) {
          json['nextPageToken'] =
            sectionList.continuationItemRenderer.continuationEndpoint.continuationCommand.token
        }
      } catch (ex) {
        console.log('Failed to read contents for section list:', ex)
        console.log(sectionList)
      }
    })
  }

  /**
   * Parse a channelRenderer object from youtube search results
   * @param {object} renderer - The channel renderer
   * @returns object with data to return for this channel
   */
  parseChannelRenderer(renderer: any) {
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
  parsePlaylistRenderer(renderer: any) {
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
  parseRadioRenderer(renderer: any) {
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
  parseVideoRenderer(renderer: any) {
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
  combineString(a: any, b: any) {
    return a + b.text
  }
}
