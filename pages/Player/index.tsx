import { ScrollView, Box, Heading, Text } from 'native-base'
import React, { useEffect, useRef, useState } from 'react'
import YoutubePlayer from 'react-native-youtube-iframe'
import { Dimensions, AppState } from 'react-native'
import { useFocusEffect } from '@react-navigation/native'
import { YouTubeClient } from '../../lib'

export function Player({ route }: any) {
  const appState = useRef(AppState.currentState)
  const [appStateVisible, setAppStateVisible] = useState(appState.current)

  useEffect(() => {
    const subscription = AppState.addEventListener('change', (nextAppState) => {
      appState.current = nextAppState
      setAppStateVisible(appState.current)
    })

    return () => {
      subscription.remove()
    }
  }, [])

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
        play={appStateVisible === 'active'}
      />
      <Box alignItems="center" marginY="4">
        <Box width="85%">
          <Heading fontSize="lg">{videoData.title}</Heading>
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
