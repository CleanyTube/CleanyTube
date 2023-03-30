import { ScrollView } from 'native-base'
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
} from 'native-base'
import { useState, useRef, useEffect } from 'react'
import { AntDesign } from '@expo/vector-icons'
import { StyleSheet } from 'react-native'
import { Storage } from '../../lib'
import { PlaylistCardDto } from './interfaces'
import { PlaylistCard } from '../../components/dataDisplay/PlaylistCard'

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    bottom: 15,
    right: 15,
  },
})

export const Playlists = () => {
  const [modalVisible, setModalVisible] = useState(false)
  const [newPlaylistName, setNewPlaylistName] = useState('')
  const [playlistCards, setPlaylistCards] = useState<Array<PlaylistCardDto>>()
  const initialRef = useRef(null)
  const finalRef = useRef(null)

  const handleAddPlaylist = () => {
    const newValue: PlaylistCardDto[] = playlistCards
      ? [...playlistCards, { name: newPlaylistName, itemsQuantity: 0 }]
      : [{ name: newPlaylistName, itemsQuantity: 0 }]

    Storage.setItems(['playlist:cards', newValue]).then(() => {
      setPlaylistCards(newValue)
      setModalVisible(false)
    })
  }

  useEffect(() => {
    Storage.getObjectItems<Array<PlaylistCardDto>>('playlist:cards').then(
      (result) => setPlaylistCards(result?.[0].value)
    )
  }, [])

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
          />
        ))}
      </ScrollView>

      <View>
        <Modal
          isOpen={modalVisible}
          onClose={() => setModalVisible(false)}
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
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
                  onChangeText={(text) => setNewPlaylistName(text)}
                />
              </FormControl>
            </Modal.Body>
            <Modal.Footer>
              <Button.Group space={2}>
                <Button
                  variant="ghost"
                  // _light={{
                  //   color: 'red.400',
                  // }}
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
