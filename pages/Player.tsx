import { View, Alert } from 'react-native'
import React, { useState, useCallback } from 'react'
import YoutubePlayer from 'react-native-youtube-iframe'

export function Player({navigation, route}: any) {
  return (
    <View>
      <YoutubePlayer
        height={300}
        videoId={route?.params?.videoId}
      />
    </View>
  )
}
