import React from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions'

class LoadSubreddit extends React.Component {
    state = {
      subreddit: ''
    }

  handleChange = e => {
    this.setState({
      subreddit: e.target.value
    })
  }

  render () {
    const { fetchPosts, children } = this.props
    return (
      <div>
        <input type='text' name='subreddit'
          onChange={this.handleChange}/>
        <button onClick={()=> fetchPosts(this.state.subreddit)}>
      Fetch Posts
        </button>
        {children}
      </div>
    )
  }
}
function mapDispatchToProps(dispatch) {
  return{
  fetchPosts: subreddit => dispatch(fetchPosts(subreddit)) 
  }
}

export default connect(null , mapDispatchToProps)(LoadSubreddit)
