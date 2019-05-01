import React from 'react'
import {connect} from 'react-redux'
import {fetchPosts} from '../actions'

class LoadSubreddit extends React.Component {
  state = {
    subreddit: 'newzealand'
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  
  render () {
    const {children, dispatch} = this.props
    return (
      <div>
        <p>reddit.com/r/{this.state.subreddit}</p>
        <form>
          <label>
          <input onChange={this.handleChange} placeholder={this.state.subreddit} type="text" name="subreddit" />
          </label>
          <input onClick={() => dispatch(fetchPosts(this.state.subreddit))} type="submit" value="Fetch Posts" />
        </form>
        <br/>
        {children}
      </div>
    )
  }
}

export default connect()(LoadSubreddit)
