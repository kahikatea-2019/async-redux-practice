import React from 'react'
import { connect } from 'react-redux'
import { fetchStarWars } from '../actions'

class LoadStarWars extends React.Component {
  render () {
    const { children, dispatch } = this.props
    return (
      <div>
        <button onClick={() => dispatch(fetchStarWars())}>
          Fetch StarWars
        </button>
        {children}
      </div>
    )
  }
}

export default connect()(LoadStarWars)
