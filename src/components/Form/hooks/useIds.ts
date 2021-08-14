import { useCallback } from 'react'
import useStatus, { Status } from '../../../hooks/useStatus'
import useMediaStore from '../../../store/useMediaStore'

function useIds() {
  const { status, setStatus } = useStatus()
  const setIds = useMediaStore((state) => state.setIds)
  const isRequest = status === Status.REQUEST

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault()

      try {
        setStatus(Status.REQUEST)

        const encodedValue = encodeURIComponent(e.target.url.value)
        const response = await fetch(`/api/ids/${encodedValue}`)
        const { data } = await response.json()

        setStatus(Status.SUCCESS)
        setIds(data)
        e.target.reset()
      } catch (error) {
        setStatus(Status.FAILURE)
      }
    },
    [setIds, setStatus]
  )

  return {
    isRequest,
    handleSubmit,
  }
}

export default useIds
