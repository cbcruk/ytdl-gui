import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import { Toolbar, Paper } from '@material-ui/core'
import { Form, Lists } from './components'

function App() {
  return (
    <>
      <AppBar color="transparent" position="static">
        <Toolbar>
          <Form />
        </Toolbar>
      </AppBar>
      <Paper square>
        <Lists />
      </Paper>
    </>
  )
}

export default App
