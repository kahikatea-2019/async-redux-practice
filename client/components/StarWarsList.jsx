import React from 'react'
import { connect } from 'react-redux'

import Star from './Star'

const StarWars = props => {
    const { starWarsData } = props
    return (
      <div>
      <Star
       key={starWarsData.name}
       name={starWarsData.name}
       birth={starWarsData.birth_year}
      />
  </div>
    )
}

const mapStateToProps = (state) => {
  return {
    starWarsData: state.starWars
  }
}

export default connect(
  mapStateToProps
)(StarWars)