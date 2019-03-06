import React, {fragment} from 'react'
import classes from './Layout.css'

const layout = (props) => (
  <fragment>
    <div>ToolBar, Sidedrawer, Backdrop</div>
    <main className={classes.Content}>
      {props.children}
    </main>
  </fragment>
)

export default layout
