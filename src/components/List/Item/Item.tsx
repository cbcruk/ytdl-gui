import {
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
} from '@material-ui/core'
import React from 'react'
import { Desc, Menus } from './components'
import { getFileSize } from './helper/getFileSize'
import useInfo from './hooks/useInfo'

export type Props = {
  id: string
}

function Item({ id }: Props) {
  const { info, isRequest } = useInfo(id)

  if (!info) {
    return null
  }

  if (isRequest) {
    return null
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
    <ListItem divider>
      <ListItemAvatar>
        <Avatar src={thumbnail} alt="" />
      </ListItemAvatar>
      <ListItemText
        primary={`${uploader} - ${title}`}
        secondary={getFileSize({ format_id, formats })}
      />
      <Desc id={id} description={description} />
      <Menus id={id} />
    </ListItem>
  )
}

export default Item
