import React from 'react'

const Post = ({title, summary, date}) => (
  <div className="post">
    <p><strong>Title: </strong>{title}</p>
    <p><strong>Date: </strong>{date}</p>
    <p><strong>Summary: </strong>{summary}</p>
  </div>
)

export default Post
