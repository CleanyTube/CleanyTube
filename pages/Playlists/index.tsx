import { ScrollView } from 'native-base'
import { Fab, Icon, Box, Center, NativeBaseProvider, View } from 'native-base'
import React from 'react'
import { AntDesign } from '@expo/vector-icons'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    bottom: 25,
    right: 25,
  },
})

export const Playlists = () => {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        _dark={{
          backgroundColor: 'black',
        }}
      ></ScrollView>

      <View>
        <Fab
          renderInPortal={false}
          shadow={2}
          backgroundColor="red.400"
          size="sm"
          icon={<Icon color="white" as={AntDesign} name="plus" size="sm" />}
          style={styles.fab}
        />
      </View>
    </View>
  )
}
