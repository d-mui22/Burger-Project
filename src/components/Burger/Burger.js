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
    .reduce((array, element) => {
      return array.concat(element)
    }, [])

    if (convertedIngredients.length === 0) {
      convertedIngredients = "Add some TASTY ingredients"
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
