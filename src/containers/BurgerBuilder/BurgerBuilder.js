import React, {Component, Fragment} from 'react'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'

const INGREDIENT_PRICES = {
  lettuce: .25,
  cheese: .5,
  beef: 1,
  bacon: 1,
  tomato: .5
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
      cheese: 1,
      beef: 1,
      tomato: 0,
      lettuce: 0,
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
    if (previousCount <= 0) {
      return
    }
    const newCount = previousCount - 1
    const updatedIngredients = {
      ...this.state.ingredients
    }
    updatedIngredients[type] = newCount
    const ingredientPrice = INGREDIENT_PRICES[type]
    const oldPrice = this.state.totalPrice
    const newPrice = oldPrice - ingredientPrice
    this.setState({
      totalPrice: newPrice,
      ingredients: updatedIngredients
    })
  }

  render () {
    const ingredientChecker = {
      ...this.state.ingredients
    }
    for (let key in ingredientChecker) {
      ingredientChecker[key] = ingredientChecker[key] <= 0
    }
    return (
      <Fragment>
        <Burger
          ingredients = {this.state.ingredients}
        />
        <BuildControls
          ingredientChecker={ingredientChecker}
          addIngredient={this.addIngredientHandler}
          removeIngredient={this.removeIngredientHandler}
          price={this.state.totalPrice}
        />
      </Fragment>
    )
  }
}

export default BurgerBuilder
