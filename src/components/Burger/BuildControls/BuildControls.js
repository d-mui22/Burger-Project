import React from 'react'
import BuildControl from './BuildControl/BuildControl'
import classes from './BuildControls.css'

const controls = [
  {label: 'Meat', type: 'meat'},
  {label: 'Bacon', type: 'bacon'},
  {label: 'Cheese', type: 'cheese'},
  {label: 'Lettuce', type: 'lettuce'},
]

const buildControls = (props) => {
  return(
    <div className={classes.BuildControls}>
      {controls.map(control => (
        <BuildControl
          key={control.label}
          label={control.label}
          type={control.type}
          addIngredient={() => props.addIngredient(control.type)}
          removeIngredient={() => props.removeIngredient(control.type)}
          disableButton={props.disabled[control.type]}
        />
      ))}
    </div>
  )
}

export default buildControls