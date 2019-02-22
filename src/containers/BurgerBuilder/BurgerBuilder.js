import React, {Component} from 'react'
import Aux from '../../hoc/Aux'
import Burger from '../../components/Burger/Burger'

class BurgerBuilder extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //
  //   }
  // } also a viable method for state.
  state = {
    ingredients: {
      bacon: 1,
      meat: 2,
      salad: 1,
      cheese: 2
    }
  }
  render () {
    return (
      <Aux>
        <Burger
          ingredients = {this.state.ingredients}
        />
        <div>Burger Controls</div>
      </Aux>
    )
  }
}

export default BurgerBuilder
