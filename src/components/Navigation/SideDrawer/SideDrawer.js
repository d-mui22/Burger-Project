import React, {Fragment} from 'react'
import Logo from '../../Logo/Logo'
import Items from '../Items/Items'
import classes from './SideDrawer.css'
import Backdrop from '../../UI/Backdrop/Backdrop'

const sideDrawer = (props) => {
  let showOrHide = [classes.SideDrawer, classes.Close]

  if (props.open) {
    showOrHide = [classes.SideDrawer, classes.Open]
  }

  return(
    <Fragment>
      <Backdrop
        show={props.open}
        clicked={props.close}
      />
    <div className={showOrHide.join(' ')}>
        <div className={classes.Logo}>
          <Logo/>
        </div>
        <nav>
          <Items/>
        </nav>
      </div>
    </Fragment>
  )
}

export default sideDrawer
