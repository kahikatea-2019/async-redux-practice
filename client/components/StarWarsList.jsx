import React from 'react'
import { connect } from 'react-redux'

import Star from './Star'

const StarWars = ({ starWarsData }) => (
  <div>
    {starWarsData.map(item =>
      <Star
        key={item.name}
        name={item.name}
      />
    )}
  </div>
)

const mapStateToProps = (state) => {
  return {
    starwarsData: state.starwars
  }
}

export default connect(
  mapStateToProps
)(StarWars)
