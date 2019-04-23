import React from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions'

class LoadSubreddit extends React.Component {
    state = {
      subreddit: ''
    }

    handleChange = (e) => {
      this.setState({
        subreddit: e.target.value
      })
    }

    render () {
      const { children, dispatch } = this.props
      return (
        <div>
          <input name="subreddit" onChange={this.handleChange} value={this.state.wombat} />
          <button onClick={() => dispatch(fetchPosts(this.state.subreddit))}>
          Fetch Posts
          </button>
          {children}
        </div>
      )
    }
}

export default connect()(LoadSubreddit)
