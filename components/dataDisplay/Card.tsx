import * as React from 'react'
import { View } from 'react-native'
import { Box, Heading, AspectRatio, Image, Center, Stack } from 'native-base'

export const Card = ({ title, info, imageUrl }: any) => {
  return (
    <View>
      <Box
        maxW="80"
        rounded="lg"
        overflow="hidden"
        borderColor="coolGray.200"
        borderWidth="1"
        _dark={{
          borderColor: 'coolGray.600',
          backgroundColor: 'gray.700',
        }}
        _web={{
          shadow: 2,
          borderWidth: 0,
        }}
        _light={{
          backgroundColor: 'gray.50',
        }}
      >
        <Box>
          <AspectRatio w="100%" ratio={16 / 9}>
            <Image
              source={{
                uri: imageUrl,
              }}
              alt="image"
            />
          </AspectRatio>
          {info ? (
            <Center
              bg="red.400"
              _dark={{
                bg: 'red.400',
              }}
              _text={{
                color: 'warmGray.50',
                fontWeight: '700',
                fontSize: 'xs',
              }}
              position="absolute"
              bottom="0"
              right="0"
              px="3"
              py="1.5"
              style={{ borderTopLeftRadius: 5 }}
            >
              {info}
            </Center>
          ) : null}
        </Box>
        <Stack p="4" space={3}>
          <Stack space={2}>
            <Heading size="sm" ml="-1">
              {title}
            </Heading>
          </Stack>
        </Stack>
      </Box>
    </View>
  )
}
