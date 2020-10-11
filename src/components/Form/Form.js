import React from 'react'
import { Button, Flex, Input, Spinner } from '@chakra-ui/core'
import { DownloadIcon } from '@chakra-ui/icons'
import useIds from './hooks/useIds'

function Form() {
  const { value, setValue, isRequest, handleSubmit } = useIds()

  return (
    <Flex as="form" py="4" onSubmit={handleSubmit}>
      <Input
        value={value}
        isDisabled={isRequest}
        placeholder="URL을 입력해 주세요"
        borderRightWidth="0"
        borderRightRadius="0"
        onChange={(e) => setValue(e.target.value)}
      />
      <Button
        type="submit"
        isDisabled={isRequest}
        leftIcon={isRequest ? <Spinner size="xs" /> : <DownloadIcon />}
        colorScheme="blue"
        borderLeftRadius="0"
      >
        Add
      </Button>
    </Flex>
  )
}

export default Form
