import * as React from 'react'
import { Box, Icon, Input, ScrollView } from 'native-base'
import { VideoCard } from '../../components'
import { MaterialIcons } from '@expo/vector-icons'
import { useState } from 'react'
import { YouTubeClient } from '../../lib'

export const Search = ({ navigation }: any) => {
  const youtubeClient = new YouTubeClient()
  const [query, setQuery] = useState('')
  const [submit, setSubmit] = useState('')
  const [searchResults, setSearchResults] = useState<any | null>(null)
  const [currentTimeout, setCurrentTimeout] = useState<number | null>(null)

  const fetchYouTubeData = async () => {
    if (!query) return
    if (currentTimeout !== null) clearTimeout(currentTimeout)

    const res = await youtubeClient.search(query)
    setSearchResults(res?.results)
  }

  return (
    <ScrollView
      _dark={{
        backgroundColor: 'black',
      }}
    >
      <Input
        placeholder="Pesquisar"
        py="3"
        px="1"
        fontSize="14"
        margin="4"
        _dark={{
          borderColor: 'primary.50',
          color: 'primary.50',
        }}
        InputLeftElement={
          <Icon
            m="2"
            ml="3"
            size="6"
            color="gray.400"
            as={<MaterialIcons name="search" />}
          />
        }
        onChangeText={(search) => {
          if (currentTimeout !== null) clearTimeout(currentTimeout)
          setQuery(search)
          setCurrentTimeout(setTimeout(fetchYouTubeData, 250))
        }}
        onSubmitEditing={() => setSubmit(query)}
        variant="rounded"
      />
      {searchResults?.map((result: any) =>
        result.video?.id && query && query === submit ? (
          <VideoCard
            key={result.video?.id}
            navigation={navigation}
            videoId={result.video?.id}
            title={result.video?.title}
            duration={result.video?.duration}
            imageUrl={result.video?.thumbnail_src}
          />
        ) : null
      )}
    </ScrollView>
  )
}
