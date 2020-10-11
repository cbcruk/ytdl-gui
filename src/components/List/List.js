import { Box } from '@chakra-ui/core'
import React from 'react'
import { useMediaStore } from '../../store'
import Item from './Item'

function List() {
  const ids = useMediaStore((state) => state.ids)

  return (
    <Box>
      {ids.map((id) => (
        <Item key={id} id={id} />
      ))}
    </Box>
  )
}

export default List
