import React from 'react'
import useIds from './hooks/useIds'
import { IconButton, InputBase, Typography } from '@material-ui/core'
import { Search, Menu } from '@material-ui/icons'
import useStyles from './styles'

function Form() {
  const classes = useStyles()
  const { isRequest, handleSubmit } = useIds()

  return (
    <>
      <IconButton edge="start" className={classes.menuButton} color="inherit">
        <Menu />
      </IconButton>

      <Typography className={classes.title} variant="h6" noWrap></Typography>

      <form className={classes.search} onSubmit={handleSubmit}>
        <div className={classes.searchIcon}>
          <Search />
        </div>
        <InputBase
          name="url"
          disabled={isRequest}
          placeholder="URL을 입력해 주세요"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          inputProps={{ 'aria-label': 'search' }}
          required
        />
      </form>
    </>
  )
}

export default Form
