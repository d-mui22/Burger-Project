import React, {Component, Fragment} from 'react'
import Button from '../../UI/Button/Button'

class OrderSummary extends Component {

  render () {
    const ingredientSummary = Object.keys(this.props.ingredients)
      .map(ingredientKey => {
        return (
          <li key={ingredientKey}>
            <span style={{textTransform: 'capitalize'}}>{ingredientKey}</span>: <strong>{this.props.ingredients[ingredientKey]}</strong>
          </li>
        )
      })

    return (
      <Fragment>
        <div style={{textAlign: 'center'}}>
          <h3 style={{marginBottom: '0'}}>Your Order</h3>
          <h4 style={{textDecorationLine: 'underline', marginTop: '0'}}>Selected Ingredients</h4>
        </div>
        <div style={{marginLeft: '30%'}}>
          <ul>
            {ingredientSummary}
          </ul>
          <p>Price: <mark>$<strong>{this.props.totalPrice.toFixed(2)}</strong></mark></p>
        </div>
        <div style={{textAlign: 'center'}}>
          <Button
            clicked={this.props.continueOrder}
            btnType='Success'>Continue</Button>
          <Button
            clicked={this.props.cancelOrder}
            btnType='Fail'>Cancel</Button>
        </div>
      </Fragment>
    )
  }
}

export default OrderSummary
