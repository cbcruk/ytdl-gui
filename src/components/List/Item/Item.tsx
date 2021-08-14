import {
  ListItem,
  ListItemText,
  makeStyles,
  createStyles,
} from '@material-ui/core'
import { Description, Image } from '@material-ui/icons'
import React from 'react'
import { Menus, Popover } from './components'
import { getFileSize } from './helper/getFileSize'
import useInfo from './hooks/useInfo'

export type Props = {
  id: string
}

const useStyles = makeStyles((_theme) =>
  createStyles({
    primaryText: {
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
      overflow: 'hidden',
    },
    thumbnail: {
      width: 320,
      verticalAlign: 'top',
    },
  })
)

function Item({ id }: Props) {
  const { info, isRequest } = useInfo(id)
  const classes = useStyles()

  if (!info) {
    return null
  }

  if (isRequest) {
    return null
  }

  const { thumbnail, description, uploader, title, format_id, formats } = info
  const primaryText = `${uploader} - ${title}`

  return (
    <ListItem divider>
      <ListItemText
        primary={primaryText}
        primaryTypographyProps={{
          className: classes.primaryText,
          title: primaryText,
        }}
        secondary={getFileSize({ format_id, formats })}
      />
      <Popover id={`thumbnail-${id}`} icon={<Image />}>
        <img src={thumbnail} alt="" className={classes.thumbnail} />
      </Popover>
      <Popover id={`description-${id}`} icon={<Description />}>
        {description}
      </Popover>
      <Menus id={id} />
    </ListItem>
  )
}

export default Item
