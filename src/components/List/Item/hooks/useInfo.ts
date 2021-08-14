import { useEffect, useState } from 'react'
import useStatus, { Status } from '../../../../hooks/useStatus'

export type Response = {
  thumbnail: string
  description: string
  webpage_url: string
  uploader: string
  title: string
  format_id: string
  formats: {
    format_id: string
    filesize: number
  }[]
}

function useInfo(id: string) {
  const { status, setStatus } = useStatus()
  const [info, setInfo] = useState<Response | null>(null)
  const isRequest = status === Status.REQUEST

  useEffect(() => {
    setStatus(Status.REQUEST)

    fetch(`/api/info/${id}`)
      .then((r) => r.json())
      .then(({ data }) => {
        setStatus(Status.SUCCESS)
        setInfo(data)
      })
      .catch(() => {
        setStatus(Status.FAILURE)
      })
  }, [id, setStatus])

  return {
    isRequest,
    info,
  }
}

export default useInfo
