import { useCallback, useState } from 'react'
import useStatus, { Status } from '../../../hooks/useStatus'
import useMediaStore from '../../../store/useMediaStore'

function useIds() {
  const [value, setValue] = useState('')
  const { status, setStatus } = useStatus()
  const setIds = useMediaStore((state) => state.setIds)
  const isRequest = status === Status.REQUEST

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault()

      try {
        setStatus(Status.REQUEST)

        const response = await fetch(`/api/ids/${value}`)
        const { ids } = await response.json()

        setStatus(Status.SUCCESS)
        setIds(ids)
        setValue('')
      } catch (error) {
        setStatus(Status.FAILURE)
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
