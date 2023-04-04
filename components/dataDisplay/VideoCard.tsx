import * as React from 'react'
import { Card } from './Card'
import { useState, useRef } from 'react'
import { View, Modal, Box, Button, Icon, useToast } from 'native-base'
import { Ionicons, MaterialIcons } from '@expo/vector-icons'
import * as Clipboard from 'expo-clipboard'
import { Storage, YouTubeClient } from '../../lib'
import {
  PlaylistCardDto,
  PlaylistDetailDto,
} from '../../pages/Playlists/interfaces'

export const VideoCard = ({
  navigation,
  videoId,
  title,
  duration,
  imageUrl,
  target,
  onDelete,
}: {
  navigation: any
  videoId: string
  title: string
  duration: string
  imageUrl: string
  target: string
  onDelete?: (uuid: string) => void
}) => {
  const toast = useToast()
  const [modalVisible, setModalVisible] = useState(false)
  const [filteredPlaylists, setFilteredPlaylists] = useState<
    Array<PlaylistCardDto>
  >([])
  const [isPressed, setIsPressed] = useState(false)
  const initialRef = useRef(null)
  const finalRef = useRef(null)

  const handleOpenPlaylistForm = async () => {
    setModalVisible(false)
    const playlists = await Storage.getObjectItem<Array<PlaylistCardDto>>(
      'playlist:cards'
    )
    const keys = playlists.map((playlist) => `playlist:${playlist.uuid}`)
    const detailedPlaylists = await Storage.getObjectItems<PlaylistDetailDto>(
      ...keys
    )
    const filteredPlaylists = playlists.filter((playlist) => {
      const playlistDetail = detailedPlaylists.find(
        (detail) => detail.value.uuid === playlist.uuid
      )
      return playlistDetail?.value.videos.every((video) => video.id !== videoId)
    })
    if (filteredPlaylists.length > 0) setFilteredPlaylists(filteredPlaylists)
    else {
      setFilteredPlaylists([])
      toast.show({
        title:
          playlists.length === 0
            ? 'É necessário criar uma playlist primeiro'
            : 'O vídeo já foi adicionado a todas as playlists',
        width: '64',
        bottom: '12',
      })
    }
  }

  const handleAddVideo = async (playlistUuid: string) => {
    const videoUrl = `https://www.youtube.com/watch?v=${videoId}`

    const youtubeClient = new YouTubeClient()
    const urlIsValid = youtubeClient.validateUrl(videoUrl)

    if (!urlIsValid) {
      toast.show({
        title: 'OPS! Ainda não é possível importar esse formato de URL',
        width: '64',
        bottom: '12',
      })
      return
    }

    setFilteredPlaylists([])
    setModalVisible(false)

    toast.show({
      title: 'Adicionando vídeo',
      width: '64',
      bottom: '12',
    })

    const videoData = await youtubeClient.getVideoData(videoUrl)

    if (!videoData?.id || !videoData?.title || !videoData.thumbnail) {
      toast.show({
        title: 'OPS! Não foi possível obter os dados do vídeo',
        width: '64',
        bottom: '12',
      })
      return
    }

    const playlistDetail = await Storage.getObjectItem<PlaylistDetailDto>(
      `playlist:${playlistUuid}`
    )

    const newValue: PlaylistDetailDto = {
      name: playlistDetail.name,
      uuid: playlistDetail.uuid,
      videos: [
        ...playlistDetail.videos,
        {
          id: videoData.id,
          title: videoData?.title,
          image: videoData?.thumbnail,
        },
      ],
      image: playlistDetail.image,
    }

    Storage.setItem(`playlist:${playlistUuid}`, newValue).catch(console.error)

    Storage.getObjectItem<Array<PlaylistCardDto>>('playlist:cards').then(
      (playlistCards) => {
        const currentPlaylistIndex = playlistCards.findIndex(
          (playlistCard) => playlistCard.uuid === playlistUuid
        )!

        playlistCards[currentPlaylistIndex].itemsQuantity =
          playlistCards[currentPlaylistIndex]?.itemsQuantity + 1

        playlistCards[currentPlaylistIndex].image = newValue.videos?.[0]?.image

        Storage.setItem('playlist:cards', playlistCards).catch(console.error)
      }
    )
  }

  return (
    <View>
      <Box alignItems="center">
        <Button
          variant="unstyled"
          onPress={() => navigation.navigate(target, { videoId })}
          onPressIn={() => setIsPressed(true)}
          onPressOut={() => setIsPressed(false)}
          onLongPress={() => setModalVisible(true)}
        >
          <Card
            isPressed={isPressed}
            title={title}
            info={duration}
            imageUrl={imageUrl}
          />
        </Button>
      </Box>

      <View>
        <Modal
          isOpen={modalVisible}
          onClose={() => setModalVisible(false)}
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
        >
          <Modal.Content>
            <Modal.Header>Opções</Modal.Header>
            <Modal.Body>
              <Button
                marginY="2"
                leftIcon={<Icon as={Ionicons} name="copy" size="sm" />}
                onPress={async () => {
                  setModalVisible(false)
                  await Clipboard.setStringAsync(
                    `https://www.youtube.com/watch?v=${videoId}`
                  )

                  toast.show({
                    title: 'Copiado',
                    width: '64',
                    bottom: '12',
                  })
                }}
                backgroundColor="red.400"
              >
                Copiar URL
              </Button>
              <Button
                marginY="2"
                leftIcon={
                  <Icon as={MaterialIcons} name="playlist-add" size="md" />
                }
                onPress={handleOpenPlaylistForm}
                backgroundColor="red.400"
              >
                Adicionar à playlist
              </Button>
              {!!onDelete ? (
                <Button
                  marginY="2"
                  leftIcon={<Icon as={Ionicons} name="trash" size="sm" />}
                  onPress={() => {
                    setModalVisible(false)
                    onDelete?.(videoId)
                  }}
                  backgroundColor="red.400"
                >
                  Remover da playlist
                </Button>
              ) : null}
            </Modal.Body>
          </Modal.Content>
        </Modal>
        <Modal
          isOpen={filteredPlaylists.length !== 0}
          onClose={() => {
            setModalVisible(true)
            setFilteredPlaylists([])
          }}
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
        >
          <Modal.Content>
            <Modal.Header>Adicionar à playlist</Modal.Header>
            <Modal.Body>
              {filteredPlaylists.map((playlist) => (
                <Button
                  key={playlist.uuid}
                  marginY="2"
                  onPress={() => handleAddVideo(playlist.uuid)}
                  backgroundColor="red.400"
                >
                  {playlist.name}
                </Button>
              ))}
            </Modal.Body>
          </Modal.Content>
        </Modal>
      </View>
    </View>
  )
}
