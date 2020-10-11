import {
  IconButton,
  Menu as ChakraMenu,
  MenuButton,
  MenuItem,
  MenuList,
  Spinner,
  theme,
} from '@chakra-ui/core'
import { ChevronDownIcon } from '@chakra-ui/icons'
import React from 'react'
import Emoji from './Emoji'
import useDownload from './hooks/useDownload'

function Menu({ id }) {
  const { isRequest, getMedia, removeItem } = useDownload(id)

  if (isRequest) {
    return <Spinner />
  }

  return (
    <ChakraMenu>
      <MenuButton
        as={IconButton}
        icon={<ChevronDownIcon />}
        size="xs"
      ></MenuButton>
      <MenuList fontSize="sm" minWidth="auto">
        <MenuItem onClick={() => getMedia('video')}>
          <Emoji emoji="📺" label="Video" />
        </MenuItem>
        <MenuItem onClick={() => getMedia('audio')}>
          <Emoji emoji="🎵" label="Audio" />
        </MenuItem>
        <MenuItem color={theme.colors.red[500]} onClick={removeItem}>
          <Emoji emoji="🗑" label="Delete" />
        </MenuItem>
      </MenuList>
    </ChakraMenu>
  )
}

export default Menu
