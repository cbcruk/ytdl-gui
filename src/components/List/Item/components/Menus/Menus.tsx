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
import React, { useState } from 'react'

const useStyles = makeStyles((_theme: Theme) =>
  createStyles({
    delete: {
      color: red[500],
    },
  })
)

type Props = {
  id: string
}

function Menus({ id }: Props) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const classes = useStyles()
  const menuId = `menu-${id}`

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

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
      >
        <MenuItem onClick={handleClose}>오디오</MenuItem>
        <MenuItem onClick={handleClose}>비디오</MenuItem>
        <MenuItem onClick={handleClose} className={classes.delete}>
          삭제
        </MenuItem>
      </Menu>
    </>
  )
}

export default Menus
