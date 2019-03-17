import React from 'react';
import classes from './Toolbar.css'
import Logo from '../../Logo/Logo'
import Items from '../Items/Items'
import Toggle from '../SideDrawer/Toggle/Toggle'

const toolbar = (props) => {
  return(
    <header className={classes.Toolbar}>
      <Toggle
        clicked={props.toggleSideDrawer}
      />
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
