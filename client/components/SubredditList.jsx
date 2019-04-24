import React from 'react'
import { connect } from 'react-redux'

import Post from './Post'

const Subreddit = ({ subreddits }) => (
  <div>
    {subreddits.map(post =>
      <Post
        key={post}
        title={post.title}
        time={new Date(post.created_utc * 1000).toString()}
        preview={post.selftext.slice(0, 30)}
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
