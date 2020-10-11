import { Text, theme, Tooltip } from '@chakra-ui/core'
import React from 'react'

function Title({ label, href, children }) {
  return (
    <Tooltip label={label} whiteSpace="pre-line" fontSize="xs">
      <Text color={theme.colors.gray[50]} isTruncated>
        <a href={href} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      </Text>
    </Tooltip>
  )
}

export default Title
