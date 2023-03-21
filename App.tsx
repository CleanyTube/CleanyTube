import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { HomeScreen, Video } from './pages'
import { NativeBaseProvider } from 'native-base'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: 'MinimalTube' }}
          />
          <Stack.Screen name="Video" component={Video} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  )
}
