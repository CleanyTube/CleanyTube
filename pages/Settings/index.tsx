import {
  useColorMode,
  Text,
  Button,
  Box,
  Switch,
  HStack,
  ScrollView,
  useToast,
} from 'native-base'
import { Storage } from '../../lib'

export const Settings = ({ route }: any) => {
  const toast = useToast()
  const { colorMode, setColorMode, toggleColorMode } = useColorMode()

  Storage.getStringItem('settings:colorMode').then((colorModeFromStorage) => {
    setColorMode(colorModeFromStorage ?? 'light')
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
        <Button
          onPress={async () => {
            await Storage.clear().catch(console.error)
            await Storage.setItem(
              'settings:colorMode',
              colorMode === 'light' ? 'dark' : 'light'
            )
            toast.show({
              title: 'Os dados do aplicativo foram limpos',
              width: '64',
              bottom: '12',
            })
          }}
        >
          Limpar dados
        </Button>
      </Box>
    </ScrollView>
  )
}
