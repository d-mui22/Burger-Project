import React from 'react'
import classes from './Burger.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

const burger = (props) => {
  let convertedIngredients = Object.keys(props.ingredients)
    .map(ingredientKey => {
       return [...Array(props.ingredients[ingredientKey])].map((_, i) => {
         return <BurgerIngredient key={ingredientKey + i} type={ingredientKey}/>
       })
    })
    .reduce((arr, el) => {
      return arr.concat(el)
    }, [])

    if (convertedIngredients.length === 0) {
      convertedIngredients = "Please Add Some Ingredients"
    }
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type='bread-top'/>
      {convertedIngredients}
      <BurgerIngredient type='bread-bottom'/>
    </div>
  )
}

export default burger
