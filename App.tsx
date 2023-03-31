import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native'
import { Home, Playlists, Settings } from './pages'
import { NativeBaseProvider, useColorMode, extendTheme } from 'native-base'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Icon } from 'native-base'
import { Ionicons, MaterialIcons } from '@expo/vector-icons'
import { StatusBar } from 'react-native'
import { useEffect, useState } from 'react'
import { Storage } from './lib'
import 'react-native-url-polyfill/auto'

const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <NativeBaseProvider>
      <Root />
    </NativeBaseProvider>
  )
}

function Root() {
  const { colorMode, setColorMode } = useColorMode()
  useEffect(() => {
    Storage.getStringItems('settings:colorMode').then(
      ([colorModeFromStorage]) => {
        setColorMode(colorModeFromStorage.value ?? 'light')
      }
    )
  })

  return (
    <NavigationContainer
      theme={colorMode === 'dark' ? DarkTheme : DefaultTheme}
    >
      <StatusBar
        barStyle={colorMode === 'dark' ? 'light-content' : 'dark-content'}
      />
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            if (route.name === 'Home') {
              return (
                <Icon
                  as={Ionicons}
                  name="search"
                  size={5}
                  color={focused ? 'red.400' : 'warmGray.500'}
                />
              )
            }
            if (route.name === 'Playlists') {
              return (
                <Icon
                  as={MaterialIcons}
                  name="playlist-play"
                  size={5}
                  color={focused ? 'red.400' : 'warmGray.500'}
                />
              )
            }
            if (route.name === 'Configurações') {
              return (
                <Icon
                  as={Ionicons}
                  name="ios-settings-outline"
                  size={5}
                  color={focused ? 'red.400' : 'warmGray.500'}
                />
              )
            }
          },
          tabBarActiveTintColor: '#f87171',
          tabBarInactiveTintColor: '#78716c',
        })}
        safeAreaInsets={{
          bottom: 12,
        }}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Playlists" component={Playlists} />
        <Tab.Screen name="Configurações" component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
