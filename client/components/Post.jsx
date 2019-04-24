import React from 'react'

const Post = ({ post }) => (
  // console.log(post)
  <div>
    <p>{post.title}</p>
    <p>{new Date(post.created_utc * 1000).toString()}</p>
    <p>{post.selftext}</p>
  </div>

)

export default Post
