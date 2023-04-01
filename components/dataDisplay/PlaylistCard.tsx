import * as React from 'react'
import { Card } from './Card'
import { useState, useRef } from 'react'
import { View, Modal, Box, Button, Icon } from 'native-base'
import { Ionicons } from '@expo/vector-icons'

export const PlaylistCard = ({
  navigation,
  title,
  itemsQuantity,
  imageUrl,
  uuid,
  onDelete,
}: {
  navigation: any
  title: string
  itemsQuantity: number
  imageUrl?: string
  uuid: string
  onDelete?: (uuid: string) => void
}) => {
  const [modalVisible, setModalVisible] = useState(false)
  const [isPressed, setIsPressed] = useState(false)
  const initialRef = useRef(null)
  const finalRef = useRef(null)

  return (
    <View>
      <Box alignItems="center">
        <Button
          variant="unstyled"
          onPress={() => navigation.navigate('PlaylistDetail', { uuid })}
          onPressIn={() => setIsPressed(true)}
          onPressOut={() => setIsPressed(false)}
          onLongPress={() => setModalVisible(true)}
        >
          <Card
            title={title}
            info={`${itemsQuantity} vídeos`}
            imageUrl={imageUrl}
            isPressed={isPressed}
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
                marginY={2}
                leftIcon={<Icon as={Ionicons} name="trash" size="sm" />}
                onPress={() => {
                  setModalVisible(true)
                  onDelete?.(uuid)
                }}
              >
                Apagar playlist
              </Button>
            </Modal.Body>
          </Modal.Content>
        </Modal>
      </View>
    </View>
  )
}
