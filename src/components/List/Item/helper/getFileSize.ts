import { Response } from '../hooks/useInfo'

type Format = Pick<Response, 'formats' | 'format_id'>

function getByteSize({ format_id, formats }: Format) {
  const size = format_id.split('+').reduce((prev, current) => {
    const predicate = formats.find((format) => format.format_id === current)

    return prev + (predicate ? predicate.filesize : 0)
  }, 0)

  return size
}

export function getFileSize(format: Format) {
  const size = getByteSize(format)

  return (size / 1024 / 1024).toFixed(2)
}
