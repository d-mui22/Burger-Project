import React, {Component, Fragment} from 'react'
import classes from './Modal.css'
import Backdrop from '../Backdrop/Backdrop'

class Modal extends Component {
  // OrderSummary should ONLY update if MODAL is visible. Without shouldComponentUpdate
  // OrderSummary would update everytime ingredient or price is changed even though
  // OrderSummary is not visible. With shouldComponentUpdate it ONLY updates OrderSummary if
  // this.props.show for Modal is TRUE! Which is when we want an update to be rendered.
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.show !== this.props.shows
  }
  
  render () {
    return(
      <Fragment>
        <Backdrop
          show={this.props.show}
          clicked={this.props.cancelOrder}
        />
        <div
        className={classes.Modal}
        style={{
          transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
          opacity: this.props.show ? '1' : '0'
        }}>
          {this.props.children}
        </div>
      </Fragment>
    )
  }
}

export default Modal
