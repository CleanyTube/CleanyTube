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
import { useState, useRef } from 'react'
import { AntDesign } from '@expo/vector-icons'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    bottom: 15,
    right: 15,
  },
})

export const Playlists = () => {
  const [modalVisible, setModalVisible] = useState(false)
  const initialRef = useRef(null)
  const finalRef = useRef(null)

  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        _dark={{
          backgroundColor: 'black',
        }}
      ></ScrollView>

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
                <Input ref={initialRef} marginBottom="4" />
              </FormControl>
            </Modal.Body>
            <Modal.Footer>
              <Button.Group space={2}>
                <Button
                  variant="ghost"
                  colorScheme="blueGray"
                  onPress={() => {
                    setModalVisible(false)
                  }}
                >
                  Cancel
                </Button>
                <Button
                  onPress={() => {
                    setModalVisible(false)
                  }}
                >
                  Save
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
