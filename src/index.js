import React from 'react'
import ReactDOM from 'react-dom'
import { ChakraProvider, ColorModeProvider, theme } from '@chakra-ui/core'
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeProvider
        options={{
          initialColorMode: 'dark',
          useSystemColorMode: true,
        }}
      >
        <App />
      </ColorModeProvider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
