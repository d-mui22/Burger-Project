import React, {Component} from 'react'
import classes from './BurgerIngredient.css'
import PropTypes from 'prop-types'

class BurgerIngredient extends Component {
  render() {
    let ingredient = null;

    switch (this.props.type) {
      case ('bread-bottom'):
        ingredient = <div className={classes.BreadBottom}></div>
        break
      case ('bread-top'):
        ingredient = (
          <div className={classes.BreadTop}>
            <div className={classes.Seeds1}></div>
            <div className={classes.Seeds2}></div>
          </div>
        )
        break
      case ('beef'):
        ingredient = <div className={classes.Beef}></div>
        break
      case ('cheese'):
        ingredient = <div className={classes.Cheese}></div>
        break
      case ('bacon'):
        ingredient = <div className={classes.Bacon}></div>
        break
      case ('lettuce'):
        ingredient = <div className={classes.Lettuce}></div>
        break
      case ('tomato'):
        ingredient = <div className={classes.Tomato}></div>
        break
      default:
        ingredient = null
    }
    return (
      ingredient
    )
  }
}

BurgerIngredient.propTypes = {
  type: PropTypes.string.isRequired
}

export default BurgerIngredient
