import React from 'react'
import classes from './BuildControl.css'

const buildControl = (props) => {
  return (
    <div className={classes.BuildControl}>
      <div className={classes.Label}>{props.label}</div>
      <button onClick={props.addIngredient}
        className={classes.Add}>Add</button>
      <button
        onClick={props.removeIngredient}
        className={classes.Remove}
        disabled={props.ingredientChecker}>Remove</button>
    </div>
  )
}

export default buildControl
