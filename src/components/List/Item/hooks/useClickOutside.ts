import { useState } from 'react'

function useClickOutside() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) =>
    setAnchorEl(event.currentTarget)
  const handleClose = () => setAnchorEl(null)

  return {
    anchorEl,
    handleClick,
    handleClose,
  }
}

export default useClickOutside
