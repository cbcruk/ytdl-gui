import { useState } from 'react'

export enum Status {
  IDLE = 'idle',
  REQUEST = 'request',
  SUCCESS = 'success',
  FAILURE = 'failure',
}

function useStatus(type: Status = Status.IDLE) {
  const [status, setStatus] = useState(type)

  return { status, setStatus }
}

export default useStatus
