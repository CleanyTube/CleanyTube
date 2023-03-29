import * as React from 'react'
import { View } from 'react-native'
import {
  Box,
  Button,
} from 'native-base'
import { Card } from './Card'

export const VideoCard = ({
  navigation,
  videoId,
  title,
  duration,
  imageUrl,
}: any) => {
  return (
    <View>
      <Box alignItems="center">
        <Button
          variant="unstyled"
          onPress={() => navigation.navigate('Player', { videoId })}
        >
          <Card title={title} info={duration} imageUrl={imageUrl} />
        </Button>
      </Box>
    </View>
  )
}
