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
import { useState } from 'react'

export const Settings = ({ route }: any) => {
  const [darkMode, setDarkMode] = useState(false)
  const { toggleColorMode } = useColorMode()

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
          onToggle={() => {
            toggleColorMode()
            setDarkMode(!darkMode)
          }}
          isChecked={darkMode}
        />
      </HStack>
    </ScrollView>
  )
}
