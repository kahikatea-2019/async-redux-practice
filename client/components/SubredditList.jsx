import React from 'react'
import { connect } from 'react-redux'

import Post from './Post'

const Subreddit = ({ subreddits }) => (
  <div>
    {subreddits.map(post =>
      <Post
        key={post}
        post={post}
      />
    )}
  </div>
)

const mapStateToProps = (state) => {
  return {
    subreddits: state.subreddits
  }
}

export default connect(
  mapStateToProps
)(Subreddit)
