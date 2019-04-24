import React from 'react'
import { connect } from 'react-redux'
import { fetchNasa } from '../actions'
import Nasa from './Nasa'

class LoadNasa extends React.Component {
  render () {
    const { dispatch } = this.props
    return (
      <div>
        <button onClick={() => dispatch(fetchNasa())}>
       Nasa
        </button>
        <Nasa />
      </div>
    )
  }
}
export default connect()(LoadNasa)
