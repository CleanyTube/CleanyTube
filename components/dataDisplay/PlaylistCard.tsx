import * as React from 'react'
import { View } from 'react-native'
import { Box, Button } from 'native-base'
import { Card } from './Card'

export const PlaylistCard = ({
  navigation,
  title,
  itemsQuantity,
  imageUrl,
}: {
  navigation?: any
  title: string
  itemsQuantity: number
  imageUrl?: string
}) => {
  return (
    <View>
      <Box alignItems="center">
        <Button variant="unstyled" onPress={() => null}>
          <Card
            title={title}
            info={`${itemsQuantity} vídeos`}
            imageUrl={imageUrl}
          />
        </Button>
      </Box>
    </View>
  )
}
