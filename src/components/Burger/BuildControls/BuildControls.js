import React from 'react'
import BuildControl from './BuildControl/BuildControl'
import classes from './BuildControls.css'

const controls = [
  {label: 'Beef', type: 'beef'},
  {label: 'Cheese', type: 'cheese'},
  {label: 'Bacon', type: 'bacon'},
  {label: 'Lettuce', type: 'lettuce'},
  {label: 'Tomato', type: 'tomato'},
]

const buildControls = (props) => {
  return(
    <div className={classes.BuildControls}>
      <p className={classes.TotalPrice}>Current Price: <strong>${props.price.toFixed(2)}</strong></p>
      {controls.map(control => (
        <BuildControl
          key={control.label}
          label={control.label}
          type={control.type}
          addIngredient={() => props.addIngredient(control.type)}
          removeIngredient={() => props.removeIngredient(control.type)}
          ingredientChecker={props.ingredientChecker[control.type]}
        />
      ))}
      <div>
        <button
          className={classes.OrderButton}
          onClick={props.ordering}
          disabled={!props.purchaseable}>Order Now</button>
        <button
          className={classes.ResetButton}
          disabled={!props.purchaseable}
          onClick={props.restart}>Reset</button>
      </div>
    </div>
  )
}

export default buildControls
