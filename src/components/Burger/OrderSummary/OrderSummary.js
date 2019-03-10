import React, {Fragment} from 'react'
import Button from '../../UI/Button/Button'

const orderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients)
    .map(ingredientKey => {
      return (
        <li key={ingredientKey}>
          <span style={{textTransform: 'capitalize'}}>{ingredientKey}</span>: {props.ingredients[ingredientKey]}
        </li>)
    })
  return(
    <Fragment>
      <h3>Your Order</h3>
      <p>Selected Ingredients</p>
      <ul>
        {ingredientSummary}
      </ul>
      <p>Price: <strong>{props.totalPrice.toFixed(2)}</strong></p>
      <Button
        clicked={props.continueOrder}
        btnType='Success'>Continue</Button>
      <Button
        clicked={props.cancelOrder}
        btnType='Fail'>Cancel</Button>
    </Fragment>
  )
}

export default orderSummary
