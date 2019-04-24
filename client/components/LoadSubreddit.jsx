import React from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions'

const LoadSubreddit = ({ children, dispatch }) => (
  <div>
    <button onClick={() => dispatch(fetchPosts('newzealand'))}>
      Fetch Posts
    </button>
    {children}
  </div>
)


handleChange = (e) => {
  this.setState({
    subreddit: e.target.value
  })
}

// handleSave = () => {
//   this.props.dispatch(saveWombat(this.state.wombat))
//   this.setState({
//     wombat: ''
//   })
// }

render () {
    const { children, dispatch} = this.props
  return (
    <React.Fragment>
      <input name="subreddit" onChange={this.handleChange} value={this.state.wombat} />
      <button onClick={() => dispatch(fetchPosts(this.state.subreddit))}>
      Fetch Posts
      </button>
      {children}
    </React.Fragment>
  )
}


export default connect()(LoadSubreddit)
