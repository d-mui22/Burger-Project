import React, {Fragment} from 'react'
import Logo from '../../Logo/Logo'
import Links from '../Links/Links'
import classes from './SideDrawer.css'
import Backdrop from '../../UI/Backdrop/Backdrop'

const sideDrawer = (props) => {
  let showOrHide = [classes.SideDrawer, classes.Close]

  if (props.sideDrawerState) {
    showOrHide = [classes.SideDrawer, classes.Open]
  }

  return(
    <Fragment>
      <Backdrop
        show={props.sideDrawerState}
        clicked={props.closeSideDrawer}
      />
      <div className={showOrHide.join(' ')}>
        <div className={classes.Logo}>
          <Logo/>
        </div>
        <nav>
          <Links/>
        </nav>
      </div>
    </Fragment>
  )
}

export default sideDrawer
