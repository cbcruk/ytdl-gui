import { useState } from 'react'

export const IDLE = 'idle'
export const REQUEST = 'request'
export const SUCCESS = 'success'
export const FAILURE = 'failure'

function useStatus(type = IDLE) {
  const [status, setStatus] = useState(type)

  return { status, setStatus }
}

export default useStatus
