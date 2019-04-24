import React, { Component } from 'react'
import { fetchDrinks } from '../actions/index'
import { connect } from 'react-redux'

 class CocktailLoadList extends Component {
  state = {}
  render () {
    const { fetchDrinks, children } = this.props
    return (
      <div>
        <button onClick={()=> fetchDrinks()}>
      Fetch Drink
        </button>
        {children}
      </div>
    )
  }
}
function mapDispatchToProps(dispatch) {
  return{
  fetchDrinks: () => dispatch(fetchDrinks()) 
  }
}

export default connect(null , mapDispatchToProps)(CocktailLoadList)

