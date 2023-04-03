import { ScrollView, useToast } from 'native-base'
import { Fab, Icon, View, Modal, Button, Input, FormControl } from 'native-base'
import { useState, useRef } from 'react'
import { AntDesign } from '@expo/vector-icons'
import { StyleSheet } from 'react-native'
import { generateUUID, Storage } from '../../lib'
import { PlaylistCardDto, PlaylistDetailDto } from './interfaces'
import { PlaylistCard } from '../../components/dataDisplay/PlaylistCard'
import { useFocusEffect } from '@react-navigation/native'

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    bottom: 15,
    right: 15,
  },
})

export const List = ({ navigation }: any) => {
  console.log('render list')
  const toast = useToast()
  const [modalVisible, setModalVisible] = useState(false)
  const newPlaylistName = useRef('')
  const [playlistCards, setPlaylistCards] = useState<Array<PlaylistCardDto>>([])
  const initialRef = useRef(null)
  const finalRef = useRef(null)

  const handleAddPlaylist = async () => {
    if (!newPlaylistName.current) {
      setModalVisible(false)
      return
    }

    const newPlaylistUuid = generateUUID(32)
    const newCardsList: PlaylistCardDto[] = playlistCards
      ? [
          ...playlistCards,
          {
            name: newPlaylistName.current,
            itemsQuantity: 0,
            uuid: newPlaylistUuid,
          },
        ]
      : [
          {
            name: newPlaylistName.current,
            itemsQuantity: 0,
            uuid: newPlaylistUuid,
          },
        ]

    const newPlaylistDetail: PlaylistDetailDto = {
      name: newPlaylistName.current,
      uuid: newPlaylistUuid,
      videos: [],
    }

    newPlaylistName.current = ''
    setPlaylistCards(newCardsList)
    setModalVisible(false)

    await Storage.setItem(`playlist:${newPlaylistUuid}`, newPlaylistDetail)
    await Storage.setItem('playlist:cards', newCardsList)
  }

  const handleDeletePlaylist = async (uuid: string) => {
    const newCardsList = playlistCards?.filter((card) => card.uuid !== uuid)
    setPlaylistCards(newCardsList)
    await Storage.setItem('playlist:cards', newCardsList)
    await Storage.removeItems(`playlist:${uuid}`)

    toast.show({
      title: 'Playlist apagada',
      width: '64',
      bottom: '12',
    })
  }

  useFocusEffect(() => {
    Storage.getObjectItem<Array<PlaylistCardDto>>('playlist:cards')
      .then((result) => {
        const currentDataIsOutOfDate = result?.some((item) =>
          playlistCards?.every(
            (card) =>
              card.uuid !== item.uuid ||
              card.itemsQuantity !== item.itemsQuantity ||
              card.image !== item.image
          )
        )
        const thereIsNoData = !playlistCards || playlistCards?.length === 0
        const needUpdate =
          currentDataIsOutOfDate || (thereIsNoData && result.length > 0)

        if (needUpdate) setPlaylistCards(result)
      })
      .catch(console.error)
  })

  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        _dark={{
          backgroundColor: 'black',
        }}
      >
        {playlistCards?.map((playlistCard) => (
          <PlaylistCard
            key={playlistCard.name}
            title={playlistCard.name}
            itemsQuantity={playlistCard.itemsQuantity}
            imageUrl={playlistCard.image}
            uuid={playlistCard.uuid}
            navigation={navigation}
            onDelete={() => handleDeletePlaylist(playlistCard.uuid)}
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
            <Modal.Header>Criar playlist</Modal.Header>
            <Modal.Body>
              <FormControl>
                <FormControl.Label>Nome</FormControl.Label>
                <Input
                  ref={initialRef}
                  marginBottom="4"
                  onChangeText={(text) => (newPlaylistName.current = text)}
                  onSubmitEditing={handleAddPlaylist}
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
                <Button backgroundColor="red.400" onPress={handleAddPlaylist}>
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
