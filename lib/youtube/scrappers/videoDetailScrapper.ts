import axios from 'axios'
import { InitialDataDto } from '../../interfaces'

export class VideoDetailScrapper {
  async getData(url: string) {
    try {
      const { data: html } = await axios.get<string>(url, {
        headers: {
          cookie: 'GPS=1; YSC=0jhJ__-6pXM; VISITOR_INFO1_LIVE=YRwyqkIFj3k',
          authority: 'www.youtube.com',
          accept:
            'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
          'accept-language': 'pt-BR,pt;q=0.9',
          dnt: '1',
          'sec-ch-ua':
            '"Google Chrome";v="113", "Chromium";v="113", "Not-A.Brand";v="24"',
          'sec-ch-ua-arch': '"x86"',
          'sec-ch-ua-bitness': '"64"',
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
          'upgrade-insecure-requests': '1',
          'user-agent':
            'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36',
        },
      })

      const data = html
        ?.split('var ytInitialData =')
        ?.pop()
        ?.split('</script>')
        ?.shift()
        ?.replace('};', '}')

      const parsedData = JSON.parse(data ?? '{}') as unknown as InitialDataDto

      const title =
        parsedData?.contents?.twoColumnWatchNextResults?.results?.results
          ?.contents?.[0]?.videoPrimaryInfoRenderer?.title?.runs?.[0]?.text
      const channelName =
        parsedData?.contents?.twoColumnWatchNextResults?.results?.results
          ?.contents?.[1]?.videoSecondaryInfoRenderer?.owner?.videoOwnerRenderer
          ?.title?.runs?.[0]?.text
      const description =
        parsedData?.contents?.twoColumnWatchNextResults?.results?.results
          ?.contents?.[1]?.videoSecondaryInfoRenderer?.attributedDescription
          ?.content
      const publishDate =
        parsedData?.contents?.twoColumnWatchNextResults?.results?.results
          ?.contents?.[0]?.videoPrimaryInfoRenderer?.dateText?.simpleText
      const id = this.getIdFromUrl(url)
      const thumbnail = `https://i.ytimg.com/vi/${id}/maxresdefault.jpg`

      return {
        title,
        id,
        description,
        thumbnail,
        channelName,
        publishDate,
      }
    } catch (err) {
      console.error(err)
    }
  }

  private getIdFromUrl(input: string) {
    const url = new URL(input)
    if (url.host === 'youtu.be') return url.pathname.replace('/', '')
    return url.searchParams.get('v')
  }

  validateUrl(input: string) {
    const url = new URL(input)
    const validHosts = ['youtu.be', 'www.youtube.com']
    return validHosts.includes(url.host)
  }
}
