import { useCallback } from 'react'
import useStatus, {
  FAILURE,
  REQUEST,
  SUCCESS,
} from '../../../../../../hooks/useStatus'
import useMediaStore from '../../../../../../store/useMediaStore'

function useDownload(id) {
  const { status, setStatus } = useStatus()
  const removeId = useMediaStore((state) => state.removeId)

  const getMedia = useCallback(
    async (type) => {
      try {
        setStatus(REQUEST)

        await ytdl({
          url: id,
          options: options[type],
        })

        setStatus(SUCCESS)
      } catch (error) {
        setStatus(FAILURE)
      }
    },
    [id, setStatus]
  )

  const removeItem = useCallback(() => removeId(id), [id, removeId])

  const isRequest = status === REQUEST

  return {
    isRequest,
    getMedia,
    removeItem,
  }
}

export default useDownload
