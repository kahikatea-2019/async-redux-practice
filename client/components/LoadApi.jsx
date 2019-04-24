import React from 'react'
import { connect } from 'react-redux'
import { fetchApi } from '../actions'

class LoadApi extends React.Component {
state = {
  name: ''
}

render () {
  const { fetchApi, children } = this.props

  return (

    <div>
      <button onClick={() => fetchApi(this.state.name)}>Fetch StarWars</button>
      {children}
    </div>

  )
}
}

function mapDispatchToProps (dispatch) {
  return {
    fetchApi: name => dispatch(fetchApi(name))
  }
}

export default connect(null, mapDispatchToProps)(LoadApi)
