import React from 'react'
import { connect } from 'react-redux'
import { fetchApi } from '../actions'




const LoadApi = ({ children, dispatch})































class LoadApi extends React.Component {
state = {
  name: ''
}

render () {
  const { fetchApi, children } = this.props
  return (

    <React.Fragment>
      <button onClick={() => fetchApi(this.state.name)}>Fetch StarWars</button>
      {children}
    </React.Fragment>
  )
}
}

function mapDispatchToProps (dispatch) {
  return {
    fetchApi: name => dispatch(fetchApi(name))
  }
}

export default connect(null, mapDispatchToProps)(LoadApi)
