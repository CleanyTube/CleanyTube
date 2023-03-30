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
import { Storage } from '../../lib'

export const Settings = ({ route }: any) => {
  const { colorMode, setColorMode, toggleColorMode } = useColorMode()

  useEffect(() => {
    Storage.getStringItems('settings:colorMode').then(
      ([colorModeFromStorage]) => {
        setColorMode(colorModeFromStorage.value ?? 'light')
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
            await Storage.setItems([
              'settings:colorMode',
              colorMode === 'light' ? 'dark' : 'light',
            ])
            toggleColorMode()
          }}
          isChecked={colorMode === 'dark'}
        />
      </HStack>
    </ScrollView>
  )
}
