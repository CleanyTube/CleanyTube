import * as React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { List } from './List'
import { Player } from '../Player'
import { Detail } from './Detail'

const Stack = createNativeStackNavigator()

export function Playlists() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="UserPlaylists"
        component={List}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PlaylistDetail"
        component={Detail}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PlaylistPlayer"
        component={Player}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}
