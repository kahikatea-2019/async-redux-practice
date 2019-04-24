import React from 'react'
import { connect } from 'react-redux'
import { fetchStarWars } from '../actions'

const LoadStarWars = ({ children, dispatch }) => (
  <div>
    <button onClick={() => dispatch(fetchStarWars())}>
      Who's your daddy?
    </button>
    {children}
  </div>
)

export default connect()(LoadStarWars)