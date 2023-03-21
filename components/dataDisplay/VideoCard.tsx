import * as React from 'react'
import { View } from 'react-native'
import {
  Box,
  Heading,
  AspectRatio,
  Image,
  Text,
  Center,
  HStack,
  Stack,
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
          onPress={() => navigation.navigate('Video', { videoId })}
        >
          <Card title={title} duration={duration} imageUrl={imageUrl} />
        </Button>
      </Box>
    </View>
  )
}
