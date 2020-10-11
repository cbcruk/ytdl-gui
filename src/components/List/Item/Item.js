import { Box, Center, Flex, Image, Spacer } from '@chakra-ui/core'
import React from 'react'
import { Desc, DownloadMenu, Skeleton, Title } from './components'
import useInfo from './hooks/useInfo'

function Item({ id }) {
  const { info, isRequest } = useInfo(id)

  if (!info) {
    return null
  }

  if (isRequest) {
    return <Skeleton />
  }

  const {
    thumbnail,
    description,
    webpage_url,
    uploader,
    title,
    format_id,
    formats,
  } = info

  return (
    <Flex pr="2" borderWidth="1px" borderLeft="0" borderRadius="md" mb="8px">
      <Image
        src={thumbnail}
        boxSize="64px"
        borderLeftRadius="md"
        objectFit="cover"
      />
      <Box py="2" ml="2" fontSize="sm" overflow="hidden">
        <Title label={description} href={webpage_url}>
          {uploader} - {title}
        </Title>
        <Desc
          format={{
            format_id,
            formats,
          }}
        />
      </Box>
      <Spacer />
      <Center>
        <DownloadMenu id={id} />
      </Center>
    </Flex>
  )
}

export default Item
