import React, {Fragment} from 'react'
import classes from './Layout.css'

const layout = (props) => (
  <Fragment>
    <div>ToolBar, Sidedrawer</div>
    <main className={classes.Content}>
      {props.children}
    </main>
  </Fragment>
)

export default layout
