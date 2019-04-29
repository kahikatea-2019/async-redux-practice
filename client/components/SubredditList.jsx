import React from 'react'
import { connect } from 'react-redux'

import Post from './Post'

const Subreddit = ({ subreddits }) => (
  <div>
    {subreddits.map(post =>
      <Post
        key={post}
        title={post.title}
        created={new Date(post.created_utc * 1000).toString()}
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
