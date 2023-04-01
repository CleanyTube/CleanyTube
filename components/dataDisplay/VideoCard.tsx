import * as React from 'react'
import { Card } from './Card'
import { useState, useRef } from 'react'
import { View, Modal, Box, Button, Icon, useToast } from 'native-base'
import { Ionicons } from '@expo/vector-icons'
import * as Clipboard from 'expo-clipboard'

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
  const initialRef = useRef(null)
  const finalRef = useRef(null)
  return (
    <View>
      <Box alignItems="center">
        <Button
          variant="unstyled"
          onPress={() => navigation.navigate(target, { videoId })}
          onLongPress={() => setModalVisible(true)}
        >
          <Card title={title} info={duration} imageUrl={imageUrl} />
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
              >
                Copiar URL
              </Button>
              {!!onDelete ? (
                <Button
                  marginY="2"
                  leftIcon={<Icon as={Ionicons} name="trash" size="sm" />}
                  onPress={() => {
                    setModalVisible(false)
                    onDelete?.(videoId)
                  }}
                >
                  Remover da playlist
                </Button>
              ) : null}
            </Modal.Body>
          </Modal.Content>
        </Modal>
      </View>
    </View>
  )
}
