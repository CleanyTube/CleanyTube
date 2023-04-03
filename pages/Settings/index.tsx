import {
  useColorMode,
  Text,
  Button,
  Box,
  Switch,
  HStack,
  ScrollView,
  useToast,
  Heading,
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
      <Box alignItems="center" marginY="4">
        <Box width="85%">
          <Heading>Tema</Heading>
          <HStack space="md" marginTop="3">
            <Text fontSize="lg" display="flex">
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
          <Box marginY="8">
            <Heading marginY="4">Sobre o aplicativo</Heading>
            <Text fontSize="lg" bold>
              Qual é a proposta desse app?
            </Text>
            <Text fontSize="md">
              A ideia desse aplicativo não é ser um lugar onde você consegue ver
              vídeos sem distrações e focar em seu conteúdo. Ele foi pensado
              para estimular o minimalismo digital e ajudar as pessoas. Nós não
              apoiamos nada que seja contra os termos do YouTube, por isso aqui
              você não poderá baixar vídeos e nem assistí-los em segundo plano.
            </Text>
          </Box>
          <Box marginY="8">
            <Heading marginY="4">Sobre o desenvolvedor</Heading>
            <Text fontSize="md">
              A ideia desse aplicativo surgiu como um pequeno projeto pessoal,
              com o objetivo de ajudar as pessoas. Se ele te ajudou de alguma
              forma, e você queira agradecer, considere deixar uma avaliação
              positiva na loja de aplicativos. Isso me deixaria muito feliz 😀.
            </Text>
          </Box>
        </Box>
      </Box>
    </ScrollView>
  )
}
