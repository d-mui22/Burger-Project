import React, {Component, Fragment} from 'react'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
import classes from './BurgerBuilder.css'

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
    totalPrice: 5,
    purchaseable: true,
    ordering: false
  }

  orderingHandler = () => {
    this.setState({
      ordering: true
    })
  }

  restartHandler = () => {
    this.setState({
      ingredients: {
        bacon: 0,
        cheese: 0,
        beef: 0,
        tomato: 0,
        lettuce: 0
      },
      totalPrice: 3.5,
      purchaseable: false
    })
  }

  updatePurchaseHandler = (ingredients) => {
    const sum = Object.keys(ingredients)
      .map(ingredientKey => {
        return ingredients[ingredientKey]
      })
      .reduce((sum, element) => {
        return sum + element
      }, 0)
      this.setState({
        purchaseable: sum > 0
      })
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
    this.updatePurchaseHandler(updatedIngredients);
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
    this.updatePurchaseHandler(updatedIngredients);
  }

  cancelOrderHandler = () => {
    this.setState({
      ordering: false
    })
  }

  continueOrderHandler = () => {
    alert('Burger Ordered')
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
        <Modal show={this.state.ordering} cancelOrder={this.cancelOrderHandler}>
          <OrderSummary
            ingredients={this.state.ingredients}
            totalPrice={this.state.totalPrice}
            cancelOrder={this.cancelOrderHandler}
            continueOrder={this.continueOrderHandler}
          />
        </Modal>
        <div className={classes.BurgerBuilder}>
        <Burger
          ingredients = {this.state.ingredients}
        />
        <BuildControls
          ingredientChecker={ingredientChecker}
          addIngredient={this.addIngredientHandler}
          removeIngredient={this.removeIngredientHandler}
          price={this.state.totalPrice}
          purchaseable={this.state.purchaseable}
          restart={this.restartHandler}
          ordering={this.orderingHandler}
        />
        </div>
      </Fragment>
    )
  }
}

export default BurgerBuilder
