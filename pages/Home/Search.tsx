import React, { useRef } from 'react'
import { Icon, Input, ScrollView } from 'native-base'
import { CardSkeleton, VideoCard } from '../../components'
import { MaterialIcons } from '@expo/vector-icons'
import { useState } from 'react'
import { YouTubeClient } from '../../lib'

export const Search = ({ navigation }: any) => {
  const youtubeClient = new YouTubeClient()
  const [submit, setSubmit] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [searchResults, setSearchResults] = useState<any | null>(null)
  const query = useRef('')

  const fetchYouTubeData = async () => {
    setIsLoading(true)
    setSubmit(query.current)
    if (!query) return
    setSearchResults(null)

    const res = await youtubeClient.search(query.current)
    setSearchResults(res?.results)
    setIsLoading(false)
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
        onChangeText={(search) => (query.current = search)}
        onSubmitEditing={fetchYouTubeData}
        variant="rounded"
      />
      {isLoading
        ? new Array(20)
            .fill(null)
            .map((_, index) => <CardSkeleton key={`CardSkeleton${index}`} />)
        : searchResults?.map((result: any) =>
            result.video?.id && query && query.current === submit ? (
              <VideoCard
                target="SearchPlayer"
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
