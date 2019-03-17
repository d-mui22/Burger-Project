import React from 'react'
import classes from './Link.css'

const link = (props) => {
  return(
    <li className={classes.Link}>
      <a
        href={props.link}
        className={props.active ? classes.active : null}>{props.children}</a>
    </li>
  )
}

export default link
