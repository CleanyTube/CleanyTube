import {
  NativeBaseProvider,
  useColorMode,
  Text,
  Button,
  Center,
  Box,
  useColorModeValue,
  Switch,
  HStack,
  ScrollView,
} from 'native-base'
import { useEffect, useState } from 'react'
import { useTheme } from '../../components'
import { Storage } from '../../lib'

export const Settings = ({ route }: any) => {
  const [darkMode, setDarkMode] = useState(false)
  const { setColorMode, toggleColorMode } = useColorMode()
  const { setUseInitialColorScheme } = useTheme()

  useEffect(() => {
    Storage.getStringItems('settings:colorMode').then(
      ([colorModeFromStorage]) => {
        setColorMode(colorModeFromStorage.value ?? 'light')
        setDarkMode(colorModeFromStorage.value === 'dark')
      }
    )
  })

  return (
    <ScrollView
      _dark={{
        backgroundColor: 'black',
      }}
    >
      <HStack space={3} marginTop="3" justifyContent="center">
        <Text fontSize="lg" display="flex" mb={20}>
          Modo escuro
        </Text>
        <Switch
          onToggle={async () => {
            toggleColorMode()
            setUseInitialColorScheme(false)
            setDarkMode(!darkMode)
            await Storage.setItems([
              'settings:colorMode',
              !darkMode ? 'dark' : 'light',
            ])
          }}
          isChecked={darkMode}
        />
      </HStack>
    </ScrollView>
  )
}
