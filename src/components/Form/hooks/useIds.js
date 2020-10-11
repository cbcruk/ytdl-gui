import { useCallback, useState } from 'react'
import useStatus, { FAILURE, REQUEST, SUCCESS } from '../../../hooks/useStatus'
import useMediaStore from '../../../store/useMediaStore'
import ytdl, { options } from '../../../lib/ytdl'

function useIds() {
  const [value, setValue] = useState('')
  const { status, setStatus } = useStatus()
  const setIds = useMediaStore((state) => state.setIds)
  const isRequest = status === REQUEST

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault()

      try {
        setStatus(REQUEST)

        const ids = await ytdl({
          url: value,
          options: options.ids,
        })

        setStatus(SUCCESS)
        setIds(ids)
        setValue('')
      } catch (error) {
        setStatus(FAILURE)
      }
    },
    [setIds, setStatus, value]
  )

  return {
    value,
    setValue,
    isRequest,
    handleSubmit,
  }
}

export default useIds
