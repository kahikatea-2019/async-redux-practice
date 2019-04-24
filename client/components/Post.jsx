import React from 'react'

const Post = ({ post }) => (
  <div className='post'>
    <h3>{post.title}</h3>
    <h4>{new Date(post.created_utc * 1000).toString()}</h4>
    <div>{post.selftext}</div>
    <hr />
  </div>
)

export default Post
