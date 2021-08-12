import { IconButton, Popover, Typography } from '@material-ui/core'
import { Description } from '@material-ui/icons'
import React, { useState } from 'react'
import { Response } from '../../hooks/useInfo'
import { Props as ItemProps } from '../../Item'

type Props = {
  id: ItemProps['id']
  description: Response['description']
}

function Desc({ id, description }: Props) {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

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
        <Description />
      </IconButton>
      <Popover
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
        {description}
      </Popover>
    </>
  )
}

export default Desc
