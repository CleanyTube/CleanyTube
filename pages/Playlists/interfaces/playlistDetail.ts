export interface Video {
  name: string
  image: string
  title: string
}

export interface PlaylistDetail {
  name: string
  image: string
  itemsQuantity: number
  videos: Video[]
}
