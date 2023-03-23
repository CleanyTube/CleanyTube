import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { Home, Playlists, Settings } from './pages'
import { NativeBaseProvider } from 'native-base'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Icon } from 'native-base'
import { Ionicons, FontAwesome, MaterialIcons } from '@expo/vector-icons'

const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              if (route.name === 'Home') {
                return <Icon as={Ionicons} name="search" size={5} />
              }
              if (route.name === 'Playlists') {
                return <Icon as={MaterialIcons} name="playlist-play" size={5} />
              }
              if (route.name === 'Configurações') {
                return (
                  <Icon as={Ionicons} name="ios-settings-outline" size={5} />
                )
              }
            },
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
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
    </NativeBaseProvider>
  )
}
