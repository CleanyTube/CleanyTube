import * as React from 'react'
import { VideoCard } from '../../components'
import {
  Fab,
  Icon,
  View,
  Modal,
  Button,
  Input,
  FormControl,
  ScrollView,
  useToast,
  Heading,
  Box,
} from 'native-base'
import { useState, useRef } from 'react'
import { AntDesign } from '@expo/vector-icons'
import { StyleSheet } from 'react-native'
import { Storage, YouTubeClient } from '../../lib'
import { PlaylistCardDto, PlaylistDetailDto } from './interfaces'
import { useFocusEffect } from '@react-navigation/native'

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    bottom: 15,
    right: 15,
  },
})

export const Detail = ({ navigation, route }: any) => {
  console.log('render detail')
  const toast = useToast()
  const youtubeClient = new YouTubeClient()
  const [modalVisible, setModalVisible] = useState(false)
  const initialRef = useRef(null)
  const finalRef = useRef(null)

  const playlistUuid = route?.params?.uuid
  const [playlistDetail, setPlaylistDetail] = useState<PlaylistDetailDto>()
  const newVideoUrl = useRef('')

  useFocusEffect(() => {
    Storage.getObjectItem<PlaylistDetailDto>(`playlist:${playlistUuid}`).then(
      (data) => {
        const currentDataIsOutOfDate = data?.videos
          .map((video) => video.id)
          .some((item) =>
            playlistDetail?.videos.every((video) => video.id !== item)
          )
        const needUpdate = currentDataIsOutOfDate || (!playlistDetail && data)
        if (needUpdate) setPlaylistDetail(data)
      }
    )
  })

  const handleAddVideo = async () => {
    if (!newVideoUrl || !playlistDetail) {
      setModalVisible(false)
      return
    }

    const videoUrl = newVideoUrl.current
    newVideoUrl.current = ''
    setModalVisible(false)

    const urlIsValid = youtubeClient.validateUrl(videoUrl)

    if (!urlIsValid) {
      toast.show({
        title: 'OPS! Ainda não é possível importar esse formato de URL',
        width: '64',
        bottom: '12',
      })
      return
    }

    toast.show({
      title: 'Adicionando vídeo',
      width: '64',
      bottom: '12',
    })

    const videoData = await youtubeClient.getVideoData(videoUrl)

    const videoAreAlreadyInserted = playlistDetail.videos.some(
      (video) => video.id === videoData?.id
    )
    if (videoAreAlreadyInserted) return

    if (!videoData?.id || !videoData?.title || !videoData.thumbnail) {
      toast.show({
        title: 'OPS! Não foi possível obter os dados do vídeo',
        width: '64',
        bottom: '12',
      })
      return
    }

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

    setPlaylistDetail(newValue)

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

  const handleDeleteVideo = async (id: string) => {
    const newValue: PlaylistDetailDto = {
      name: playlistDetail!.name,
      uuid: playlistDetail!.uuid,
      videos: playlistDetail?.videos.filter((video) => video.id !== id) ?? [],
      image: playlistDetail!.image,
    }
    setPlaylistDetail(newValue)
    Storage.setItem(`playlist:${playlistUuid}`, newValue).catch(console.error)

    Storage.getObjectItem<Array<PlaylistCardDto>>('playlist:cards').then(
      (playlistCards) => {
        const currentPlaylistIndex = playlistCards.findIndex(
          (playlistCard) => playlistCard.uuid === playlistUuid
        )!

        playlistCards[currentPlaylistIndex].itemsQuantity =
          playlistCards[currentPlaylistIndex]?.itemsQuantity - 1

        playlistCards[currentPlaylistIndex].image = newValue.videos?.[0]?.image

        Storage.setItem('playlist:cards', playlistCards).catch(console.error)
      }
    )
  }

  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        _dark={{
          backgroundColor: 'black',
        }}
      >
        <Box alignItems="center" marginY="4">
          <Box width="85%">
            <Heading>{playlistDetail?.name}</Heading>
          </Box>
        </Box>
        {playlistDetail?.videos?.map((video) => (
          <VideoCard
            target="PlaylistPlayer"
            key={video?.id}
            navigation={navigation}
            videoId={video?.id}
            title={video?.title}
            duration={video?.duration ?? ''}
            imageUrl={video?.image}
            onDelete={() => handleDeleteVideo(video.id)}
          />
        ))}
      </ScrollView>

      <View>
        <Modal
          isOpen={modalVisible}
          onClose={() => setModalVisible(false)}
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          justifyContent="flex-start"
          top="32"
        >
          <Modal.Content>
            <Modal.CloseButton />
            <Modal.Header>Adicionar vídeo</Modal.Header>
            <Modal.Body>
              <FormControl>
                <FormControl.Label>URL</FormControl.Label>
                <Input
                  ref={initialRef}
                  marginBottom="4"
                  onChangeText={(text) => (newVideoUrl.current = text)}
                  onSubmitEditing={handleAddVideo}
                />
              </FormControl>
            </Modal.Body>
            <Modal.Footer>
              <Button.Group space={2}>
                <Button
                  variant="ghost"
                  _dark={{
                    colorScheme: 'text',
                  }}
                  colorScheme="text"
                  onPress={() => {
                    setModalVisible(false)
                  }}
                >
                  Cancelar
                </Button>
                <Button backgroundColor="red.400" onPress={handleAddVideo}>
                  Criar
                </Button>
              </Button.Group>
            </Modal.Footer>
          </Modal.Content>
        </Modal>
        <Fab
          renderInPortal={false}
          shadow={2}
          backgroundColor="red.400"
          size="sm"
          icon={<Icon color="white" as={AntDesign} name="plus" size="sm" />}
          style={styles.fab}
          onPress={() => setModalVisible(true)}
        />
      </View>
    </View>
  )
}
