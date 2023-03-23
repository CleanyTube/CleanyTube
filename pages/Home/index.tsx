import * as React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Search } from './Search'
import { Player } from './Player'

const Stack = createNativeStackNavigator()

export function Home() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Search"
        component={Search}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Player"
        component={Player}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}
