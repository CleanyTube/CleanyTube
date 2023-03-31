import React from 'react'
import {
  Button,
  useToast,
  VStack,
  HStack,
  Text,
  Center,
  IconButton,
  CloseIcon,
  Alert,
  NativeBaseProvider,
  IToastProps,
} from 'native-base'

export const ToastAlert = ({
  id,
  status,
  variant,
  title,
  description,
  isClosable,
  toast,
  ...rest
}: {
  id: number
  title: string
  status?: 'error' | 'success' | 'warning' | 'info'
  variant: 'solid' | 'subtle' | 'left-accent' | 'top-accent' | 'outline'
  description: string
  isClosable: boolean
  toast: {
    show: (props: IToastProps) => any
    close: (id: any) => void
    closeAll: () => void
    isActive: (id: any) => boolean
  }
}) => (
  <Alert
    maxWidth="80"
    alignSelf="center"
    flexDirection="row"
    status={status ? status : 'info'}
    variant={variant}
    {...rest}
    backgroundColor='red.400'
  >
    <VStack space={1} flexShrink={1} w="100%">
      <HStack flexShrink={1} alignItems="center" justifyContent="space-between">
        <HStack space={2} flexShrink={1} alignItems="center">
          <Alert.Icon />
          <Text
            fontSize="md"
            fontWeight="medium"
            flexShrink={1}
            color={
              variant === 'solid'
                ? 'lightText'
                : variant !== 'outline'
                ? 'darkText'
                : null
            }
          >
            {title}
          </Text>
        </HStack>
        {isClosable ? (
          <IconButton
            variant="unstyled"
            icon={<CloseIcon size="3" />}
            _icon={{
              color: variant === 'solid' ? 'lightText' : 'darkText',
            }}
            onPress={() => toast.close(id)}
          />
        ) : null}
      </HStack>
      <Text
        px="6"
        color={
          variant === 'solid'
            ? 'lightText'
            : variant !== 'outline'
            ? 'darkText'
            : null
        }
      >
        {description}
      </Text>
    </VStack>
  </Alert>
)
