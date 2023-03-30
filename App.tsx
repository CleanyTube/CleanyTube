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
import { ThemeProvider, useTheme } from './components'

const Tab = createBottomTabNavigator()

export default function App() {
  const [initialColorMode, setInitialColorMode] = useState('')
  useEffect(() => {
    Storage.getStringItems('settings:colorMode').then(
      ([colorModeFromStorage]) => {
        setInitialColorMode(colorModeFromStorage.value ?? 'light')
      }
    )
  })

  return (
    <ThemeProvider>
      <NativeBaseProvider
        theme={extendTheme({
          config: {
            useSystemColorMode: false,
            initialColorMode: initialColorMode || 'light',
          },
        })}
      >
        <Root initialColorMode={initialColorMode || 'light'} />
      </NativeBaseProvider>
    </ThemeProvider>
  )
}

function Root({ initialColorMode }: { initialColorMode: string }) {
  const { colorMode } = useColorMode()
  const { useInitialColorScheme } = useTheme()
  const theme = useInitialColorScheme ? initialColorMode : colorMode

  return (
    <NavigationContainer theme={theme === 'dark' ? DarkTheme : DefaultTheme}>
      <StatusBar
        barStyle={theme === 'dark' ? 'light-content' : 'dark-content'}
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
