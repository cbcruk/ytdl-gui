import { createStyles, List, makeStyles, Paper, Theme } from '@material-ui/core'
import React from 'react'
import useMediaStore from '../../store/useMediaStore'
import Item from './Item'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    list: {
      marginBottom: theme.spacing(2),
    },
  })
)

function Lists() {
  const ids = useMediaStore((state) => state.ids)
  const classes = useStyles()

  return (
    <Paper square>
      <List className={classes.list}>
        {ids.map((id) => (
          <Item key={id} id={id} />
        ))}
      </List>
    </Paper>
  )
}

export default Lists
