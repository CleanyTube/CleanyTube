import React from 'react'
import { Skeleton, VStack, Center, Box } from 'native-base'

export const CardSkeleton = () => {
  return (
    <Center w="100%">
      <VStack
        w="80%"
        borderWidth="1"
        space={8}
        overflow="hidden"
        rounded="lg"
        marginY="4"
        _dark={{
          borderColor: 'coolGray.500',
        }}
        _light={{
          borderColor: 'coolGray.200',
        }}
      >
        <Skeleton h="40" fadeDuration={0.5} />
        <Skeleton.Text px="4" my="4" fadeDuration={0.5} />
      </VStack>
    </Center>
  )
}
