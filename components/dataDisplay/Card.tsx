import * as React from 'react'
import { View } from 'react-native'
import {
  Box,
  Heading,
  AspectRatio,
  Image,
  Text,
  Center,
  HStack,
  Stack,
  Button,
} from 'native-base'

export const Card = ({ title, duration, imageUrl }: any) => {
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
          <Center
            bg="violet.500"
            _dark={{
              bg: 'violet.400',
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
          >
            {duration}
          </Center>
        </Box>
        <Stack p="4" space={3}>
          <Stack space={2}>
            <Heading size="md" ml="-1">
              {title}
            </Heading>
          </Stack>
          {/*
                <Text fontWeight="400">
                Bengaluru (also called Bangalore) is the center of India's
                high-tech industry. The city is also known for its parks and
                nightlife.
              </Text>
              <HStack
                alignItems="center"
                space={4}
                justifyContent="space-between"
              >
                <HStack alignItems="center">
                  <Text
                    color="coolGray.600"
                    _dark={{
                      color: 'warmGray.200',
                    }}
                    fontWeight="400"
                  >
                    6 mins ago
                  </Text>
                </HStack>
              </HStack>
              */}
        </Stack>
      </Box>
    </View>
  )
}
