import React from 'react'
import classes from './Item.css'

const item = (props) => {
  return(
    <li className={classes.Item}>
      <a
        href={props.link}
        className={props.active ? classes.active : null}>{props.children}</a>
    </li>
  )
}

export default item
