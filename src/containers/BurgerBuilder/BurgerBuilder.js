import React, {Component, Fragment} from 'react'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'

class BurgerBuilder extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //
  //   }
  // } also a viable method for state.
  state = {
    ingredients: {
      bacon: 0,
      meat: 0,
      lettuce: 0,
      cheese: 0
    }
  }

  render () {
    return (
      <Fragment>
        <Burger
          ingredients = {this.state.ingredients}
        />
        <BuildControls/>
      </Fragment>
    )
  }
}

export default BurgerBuilder
