import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { Home } from './pages'
import { NativeBaseProvider } from 'native-base'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Text } from 'react-native'

const Tab = createBottomTabNavigator()

const Settings = () => <Text>Settings</Text>
const Playlists = () => <Text>Playlist</Text>

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName

              if (route.name === 'Home') {
                iconName = focused
                  ? 'ios-information-circle'
                  : 'ios-information-circle-outline'
              } else if (route.name === 'Settings') {
                iconName = focused ? 'ios-list' : 'ios-list-outline'
              }

              return <></>
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
