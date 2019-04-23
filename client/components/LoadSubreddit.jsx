import React from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions'

class LoadSubreddit extends React.Component {
  state = {
    subreddit: ''
  }

  changeHandler = e => {
    this.setState({
      subreddit: e.target.value
    })
  }

  render () {
    const { dispatch, children } = this.props
    const { subreddit } = this.state
    return (
      <div>
        <input type="text" placeholder = "Subreddit" onChange={this.changeHandler} />
        <button onClick={() => dispatch(fetchPosts(subreddit))}>
        Fetch Posts
        </button>
        {children}
      </div>
    )
  }
}
export default connect()(LoadSubreddit)
