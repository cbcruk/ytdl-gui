import { HStack, SkeletonCircle, SkeletonText } from '@chakra-ui/core'
import React from 'react'

function Skeleton() {
  return (
    <HStack direction>
      <SkeletonCircle size="10" />
      <SkeletonText width="100%" mt="4" noOfLines={2} spacing="4" />
    </HStack>
  )
}

export default Skeleton
