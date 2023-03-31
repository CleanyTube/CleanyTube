import { ScrollView } from 'native-base'
import React, { useState, useCallback } from 'react'
import YoutubePlayer from 'react-native-youtube-iframe'

export function Player({ navigation, route }: any) {
  return (
    <ScrollView
      _dark={{
        backgroundColor: 'black',
      }}
    >
      <YoutubePlayer height={300} videoId={route?.params?.videoId} />
    </ScrollView>
  )
}
