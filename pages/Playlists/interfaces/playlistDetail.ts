export interface PlaylistVideoDto {
  image: string
  title: string
  id: string
  duration?: string
}

export interface PlaylistDetailDto {
  uuid: string
  name: string
  image?: string
  videos: PlaylistVideoDto[]
}
