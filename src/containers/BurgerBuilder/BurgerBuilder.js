import React, {Component, Fragment} from 'react'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'

const INGREDIENT_PRICES = {
  lettuce: .25,
  cheese: .5,
  meat: 1,
  bacon: 1
}

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
      meat: 1,
      lettuce: 1,
      cheese: 1
    },
    totalPrice: 5
  }

  addIngredientHandler = (type) => {
    const previousCount = this.state.ingredients[type]
    const newCount = previousCount + 1
    const updatedIngredients = {
      ...this.state.ingredients
    }
    updatedIngredients[type] = newCount
    const ingredientsPrice = INGREDIENT_PRICES[type]
    const oldPrice = this.state.totalPrice
    const newPrice = oldPrice + ingredientsPrice
    this.setState({
      totalPrice: newPrice,
      ingredients: updatedIngredients
    })
  }

  removeIngredientHandler = (type) => {
    const previousCount = this.state.ingredients[type]
    const newCount = previousCount - 1
    const updatedIngredients = {
      ...this.state.ingredients
    }
    updatedIngredients[type] = newCount
    const ingredientsPrice = INGREDIENT_PRICES[type]
    const oldPrice = this.state.totalPrice
    const newPrice = oldPrice - ingredientsPrice
    this.setState({
      totalPrice: newPrice,
      ingredients: updatedIngredients
    })
  }

  render () {
    return (
      <Fragment>
        <Burger
          ingredients = {this.state.ingredients}
        />
        <BuildControls
          addIngredient={this.addIngredientHandler}
          removeIngredient={this.removeIngredientHandler}
        />
      </Fragment>
    )
  }
}

export default BurgerBuilder
