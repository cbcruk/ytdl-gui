function getByteSize({ format_id, formats }) {
  const size = format_id.split('+').reduce((prev, current) => {
    const { filesize } = formats.find((format) => format.format_id === current)

    return prev + filesize
  }, 0)

  return size
}

export function getFileSize(item) {
  const size = getByteSize(item)

  return (size / 1024 / 1024).toFixed(2)
}
