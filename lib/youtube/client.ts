import { SearchListScrapper, VideoDetailScrapper } from './scrappers'

export class YouTubeClient {
  private searchListScrapper: SearchListScrapper
  private videoDetailScrapper: VideoDetailScrapper

  constructor() {
    this.searchListScrapper = new SearchListScrapper()
    this.videoDetailScrapper = new VideoDetailScrapper()
  }

  async search(search: string) {
    return this.searchListScrapper.getData(search)
  }

  async getVideoData(url: string) {
    return this.videoDetailScrapper.getData(url)
  }

  validateUrl(input: string) {
    return this.videoDetailScrapper.validateUrl(input)
  }
}
