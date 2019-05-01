import React from 'react'
import {connect} from 'react-redux'

import Post from './Post'

const Subreddit = ({subreddits, planets}) => (
  <div>
    {subreddits.map(post =>
      <Post
        key={post.title}
        title={post.title}
        date={new Date(post.created_utc * 1000).toString()}
        summary={post.selftext}
        planet={planets.results[Math.floor(Math.random() * 10)].name}
      />
    )}
  </div>
)

const mapStateToProps = (state) => {
  return {
    subreddits: state.subreddits,
    planets: state.planets
  }
}

export default connect(
  mapStateToProps
)(Subreddit)
