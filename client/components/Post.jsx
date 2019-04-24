import React from 'react'

const Post = ({ title, date, selftext }) => (
  <>
  <div>Title: {title}</div>
  <div>Date: {date}</div>
  <div> Summary: {selftext} </div>
  </>
)

export default Post
