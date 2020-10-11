import { useEffect, useState } from 'react'
import useStatus, { FAILURE, REQUEST, SUCCESS } from '../../../hooks/useStatus'
import ytdl, { options } from '../../../lib/ytdl'

function useInfo(id) {
  const { status, setStatus } = useStatus()
  const [info, setInfo] = useState(null)
  const isRequest = status === REQUEST

  useEffect(() => {
    setStatus(REQUEST)

    ytdl({
      url: id,
      options: options.json,
    })
      .then((rawInfo) => {
        setStatus(SUCCESS)
        setInfo(JSON.parse(rawInfo))
      })
      .catch(() => {
        setStatus(FAILURE)
      })
  }, [id, setStatus])

  return {
    isRequest,
    info,
  }
}

export default useInfo
