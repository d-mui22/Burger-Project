import React, {Fragment} from 'react'
import Button from '../../UI/Button/Button'

const orderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients)
    .map(ingredientKey => {
      return (
        <li key={ingredientKey}>
          <span style={{textTransform: 'capitalize'}}>{ingredientKey}</span>: <strong>{props.ingredients[ingredientKey]}</strong>
        </li>)
    })
  return(
    <Fragment>
      <div style={{textAlign: 'center'}}>
        <h3 style={{marginBottom: '0'}}>Your Order</h3>
        <h4 style={{textDecorationLine: 'underline', marginTop: '0'}}>Selected Ingredients</h4>
      </div>
      <div style={{marginLeft: '30%'}}>
        <ul>
          {ingredientSummary}
        </ul>
        <p>Price: <mark>$<strong>{props.totalPrice.toFixed(2)}</strong></mark></p>
      </div>
      <div style={{textAlign: 'center'}}>
        <Button
          clicked={props.continueOrder}
          btnType='Success'>Continue</Button>
        <Button
          clicked={props.cancelOrder}
          btnType='Fail'>Cancel</Button>
      </div>
    </Fragment>
  )
}

export default orderSummary
