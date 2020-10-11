import { Text, theme } from '@chakra-ui/core'
import React from 'react'
import { getFileSize } from './helper/getFileSize'

function Desc({ format }) {
  return (
    <Text color={theme.colors.gray[500]}>
      {getFileSize(format)}
      MB
    </Text>
  )
}

export default Desc
