import {
  createStyles,
  IconButton,
  makeStyles,
  Menu,
  MenuItem,
  Theme,
} from '@material-ui/core'
import { red } from '@material-ui/core/colors'
import { MoreHoriz } from '@material-ui/icons'
import React from 'react'
import useMediaStore from '../../../../../store/useMediaStore'
import useClickOutside from '../../hooks/useClickoutside'

type Props = {
  id: string
}

const useStyles = makeStyles((_theme: Theme) =>
  createStyles({
    delete: {
      color: red[500],
    },
  })
)

const options = {
  audio: {
    extractAudio: true,
    audioFormat: 'mp3',
  },
  video: {},
}

async function download({ type, id }: { type: 'audio' | 'video'; id: string }) {
  const response = await fetch(`/api/download`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      id,
      ...options[type],
    }),
  })
  const data = await response.json()

  return data
}

function Menus({ id }: Props) {
  const { anchorEl, handleClick, handleClose } = useClickOutside()
  const removeId = useMediaStore((state) => state.removeId)
  const classes = useStyles()
  const menuId = `menu-${id}`

  return (
    <>
      <IconButton
        color="inherit"
        aria-controls={menuId}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreHoriz />
      </IconButton>
      <Menu
        id={menuId}
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        onClick={handleClose}
      >
        <MenuItem onClick={() => download({ type: 'audio', id })}>
          오디오
        </MenuItem>
        <MenuItem onClick={() => download({ type: 'video', id })}>
          비디오
        </MenuItem>
        <MenuItem className={classes.delete} onClick={() => removeId(id)}>
          삭제
        </MenuItem>
      </Menu>
    </>
  )
}

export default Menus
