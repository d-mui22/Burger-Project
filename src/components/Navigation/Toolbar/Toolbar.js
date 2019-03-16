import React from 'react';
import classes from './Toolbar.css'
import Logo from '../../Logo/Logo'
import Items from '../Items/Items'

const toolbar = (props) => {
  return(
    <header className={classes.Toolbar}>
      <div>Menu</div>
      <div className={classes.Logo}>
        <Logo />
      </div>
      <nav className={classes.DesktopOnly}>
        <Items/>
      </nav>
    </header>
  )
}

export default toolbar
