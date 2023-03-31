import * as React from 'react'
import { View } from 'react-native'
import { Box, Button } from 'native-base'
import { Card } from './Card'

export const PlaylistCard = ({
  navigation,
  title,
  itemsQuantity,
  imageUrl,
  uuid,
}: {
  navigation: any
  title: string
  itemsQuantity: number
  imageUrl?: string
  uuid: string
}) => {
  return (
    <View>
      <Box alignItems="center">
        <Button
          variant="unstyled"
          onPress={() => navigation.navigate('PlaylistDetail', { uuid })}
        >
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
