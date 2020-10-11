import React from 'react'

function Emoji({ emoji, label }) {
  return (
    <span role="img" aria-label={label}>
      {emoji} {label}
    </span>
  )
}

export default Emoji
