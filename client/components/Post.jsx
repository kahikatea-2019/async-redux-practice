import React from 'react'

const Post = ({title, summary, date, planet}) => (
  <div className="post">
    <p><strong>Title: </strong>{title}</p>
    <p><strong>Date: </strong>{date}</p>
    <p><strong>Summary: </strong>{summary}</p>
    <p><strong>Random Star Wars Planet: </strong>{planet}</p>
  </div>
)

export default Post
