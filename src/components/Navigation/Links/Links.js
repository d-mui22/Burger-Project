import React from 'react'
import classes from './Links.css'
import Link from './Link/Link'

const links = (props) => {
  return(
    <ul className={classes.Links}>
      <Link link='/' active>Burger Builder</Link>
      <Link link='/'>Checkout</Link>
    </ul>
  )
}

export default links
