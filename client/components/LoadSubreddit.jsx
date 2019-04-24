import React from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions'

class LoadSubreddit extends React.Component {
  state = {
    subreddit: '',
    dateandtime: '',
    summary: ''
  }

handleChange = (e) => {
  this.setState({
    subreddit: e.target.value
  })
}

render () {
  const { fetchPosts, children } = this.props
  return (

    <React.Fragment>
      <input name="subreddit" onChange={this.handleChange} value={this.state.subreddit} />

      <button onClick={() => fetchPosts(this.state.subreddit)}> Fetch Posts  </button>
      {children}
    </React.Fragment>
  )
}
}

function mapDispatchToProps (dispatch) {
  return {
    fetchPosts: subreddit => dispatch(fetchPosts(subreddit))
  }
}

export default connect(null, mapDispatchToProps)(LoadSubreddit)
