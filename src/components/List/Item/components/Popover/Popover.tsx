import { Box, IconButton, Popover as CorePopover } from '@material-ui/core'
import React from 'react'
import useClickOutside from '../../hooks/useClickoutside'

type Props = {
  id: string
  icon: React.ReactNode
  children: React.ReactNode
}

function Popover({ id, icon, children }: Props) {
  const { anchorEl, handleClick, handleClose } = useClickOutside()
  const open = Boolean(anchorEl)
  const popoverId = open ? `popover-${id}` : undefined

  return (
    <>
      <IconButton
        aria-describedby={popoverId}
        color="inherit"
        aria-haspopup="true"
        onClick={handleClick}
      >
        {icon}
      </IconButton>
      <CorePopover
        id={popoverId}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Box p={2}>{children}</Box>
      </CorePopover>
    </>
  )
}

export default Popover
