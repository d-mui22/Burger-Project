import React, {Fragment} from 'react'

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
      <p>Continue to Checkout</p>
    </Fragment>
  )
}

export default orderSummary
