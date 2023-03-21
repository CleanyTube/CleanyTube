import { View, Alert } from 'react-native'
import React, { useState, useCallback } from 'react'
import YoutubePlayer from 'react-native-youtube-iframe'

export function Video({navigation, route}: any) {
  const [playing, setPlaying] = useState(false)

  const onStateChange = useCallback((state: any) => {
    if (state === 'ended') {
      setPlaying(false)
      Alert.alert('video has finished playing!')
    }
  }, [])

  return (
    <View>
      <YoutubePlayer
        height={300}
        play={playing}
        videoId={route?.params?.videoId}
        onChangeState={onStateChange}
      />
    </View>
  )
}
