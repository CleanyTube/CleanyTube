import {
  useColorMode,
  Text,
  Button,
  Box,
  Switch,
  HStack,
  ScrollView,
} from 'native-base'
import { useEffect } from 'react'
import { Storage } from '../../lib'

export const Settings = ({ route }: any) => {
  const { colorMode, setColorMode, toggleColorMode } = useColorMode()

  useEffect(() => {
    Storage.getStringItem('settings:colorMode').then((colorModeFromStorage) => {
      setColorMode(colorModeFromStorage ?? 'light')
    })
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
            await Storage.setItem(
              'settings:colorMode',
              colorMode === 'light' ? 'dark' : 'light'
            )
            toggleColorMode()
          }}
          isChecked={colorMode === 'dark'}
        />
      </HStack>
      <Box alignItems="center">
        <Button onPress={() => Storage.clear().catch(console.error)}>
          Limpar dados
        </Button>
      </Box>
    </ScrollView>
  )
}
