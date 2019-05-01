import React from 'react'
import { connect } from 'react-redux'

import Post from './Post'

const Subreddit = ({ subreddits }) => (
  <div>
    {subreddits.map(post =>
      <Post
        key={post}
        title={post.title}
        dateAndTime={new Date(post.created_utc * 1000).toString()}
        summary={post.selftext}
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
