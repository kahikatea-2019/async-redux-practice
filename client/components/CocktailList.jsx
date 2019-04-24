import React from 'react'
import { connect } from 'react-redux'

import Cocktail from './Cocktail'

const CocktailList = ({ drinks }) => (
  <div>
    {drinks.map(drink =>
      <Cocktail
        key={drink}
        drink={drink.strDrink}
        instructions ={drink.strInstructions}

      />
    )}
  </div>
)

const mapStateToProps = (state) => {
  return {
    drinks: state.cocktail
  }
}

export default connect(
  mapStateToProps
)(CocktailList)
