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
  HStack,
  Center,
  ScrollView,
} from 'native-base'
import { useState, useRef, useEffect } from 'react'
import { AntDesign } from '@expo/vector-icons'
import { StyleSheet, Keyboard } from 'react-native'
import { Storage, YouTubeClient } from '../../lib'
import { PlaylistCardDto, PlaylistDetailDto } from './interfaces'
import { PlaylistCard } from '../../components/dataDisplay/PlaylistCard'

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    bottom: 15,
    right: 15,
  },
})

export const Detail = ({ navigation, route }: any) => {
  const youtubeClient = new YouTubeClient()
  const [modalVisible, setModalVisible] = useState(false)
  const initialRef = useRef(null)
  const finalRef = useRef(null)

  const playlistUuid = route?.params?.uuid
  const [playlistDetail, setPlaylistDetail] = useState<PlaylistDetailDto>()
  const [newVideoUrl, setNewVideoUrl] = useState('')

  Storage.getObjectItems<PlaylistDetailDto>(`playlist:${playlistUuid}`).then(
    ([data]) => setPlaylistDetail(data.value)
  )

  const handleAddVideo = async () => {
    if (!newVideoUrl || !playlistDetail) {
      setModalVisible(false)
      return
    }

    const videoData = await youtubeClient.getVideoData(
      'https://www.youtube.com/watch?v=FM7MFYoylVs'
    )

    const videoAreAlreadyInserted = playlistDetail.videos.some(
      (video) => video.id === videoData?.id
    )
    if (videoAreAlreadyInserted) return
    if (!videoData?.id || !videoData?.title || !videoData.thumbnail) return

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
      description: playlistDetail.description,
    }

    setPlaylistDetail(newValue)
    Storage.setItems([`playlist:${playlistUuid}`, newValue]).catch(
      console.error
    )

    Storage.getObjectItems<Array<PlaylistCardDto>>('playlist:cards').then(
      (result) => {
        const playlistCards = result[0].value!
        const currentPlaylist = playlistCards.find(
          (playlistCard) => playlistCard.uuid === playlistUuid
        )!
        currentPlaylist.itemsQuantity = currentPlaylist?.itemsQuantity + 1
        Storage.setItems(['playlist:cards', playlistCards]).catch(console.error)
      }
    )

    setModalVisible(false)
  }

  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        _dark={{
          backgroundColor: 'black',
        }}
      >
        {playlistDetail?.videos?.map((video) => (
          <VideoCard
            target="PlaylistPlayer"
            key={video?.id}
            navigation={navigation}
            videoId={video?.id}
            title={video?.title}
            duration={video?.duration ?? ''}
            imageUrl={video?.image}
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
                  onChangeText={(text) => setNewVideoUrl(text)}
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
