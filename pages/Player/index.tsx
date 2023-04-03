import { ScrollView, Box, Heading, Text } from 'native-base'
import React, { useState } from 'react'
import YoutubePlayer from 'react-native-youtube-iframe'
import { Dimensions } from 'react-native'
import { useFocusEffect } from '@react-navigation/native'
import { YouTubeClient } from '../../lib'

export function Player({ route }: any) {
  const [videoData, setVideoData] = useState<{
    title: string
    id: string
    description: string
    thumbnail: string
    channelName: string
    publishDate: string
  }>({
    id: route.params.id!,
    publishDate: '',
    channelName: '',
    thumbnail: '',
    description: '',
    title: '',
  })

  useFocusEffect(() => {
    if (videoData.id === route?.params?.videoId) return
    const youtubeClient = new YouTubeClient()
    youtubeClient
      .getVideoData(`https://www.youtube.com/watch?v=${route?.params?.videoId}`)
      .then((result) => {
        setVideoData({
          id: route.params.id!,
          publishDate: result?.publishDate ?? '',
          channelName: result?.channelName ?? '',
          thumbnail: result?.thumbnail ?? '',
          description: result?.description ?? '',
          title: result?.title ?? '',
        })
      })
  })

  const windowWidth = Dimensions.get('window').width

  return (
    <ScrollView
      _dark={{
        backgroundColor: 'black',
      }}
    >
      <YoutubePlayer
        height={(9 * windowWidth) / 16}
        videoId={route?.params?.videoId}
      />
      <Box alignItems="center" marginY="4">
        <Box width="85%">
          <Heading>{videoData.title}</Heading>
          <Box marginY="2">
            <Text fontSize="lg" bold>
              {videoData.channelName}
            </Text>
            <Text>{videoData.publishDate}</Text>
          </Box>
          <Text>{videoData.description}</Text>
        </Box>
      </Box>
    </ScrollView>
  )
}
