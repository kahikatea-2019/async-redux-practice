import React from 'react'

const Post = ({ title, dateandtime, summary }) => (
  <div>{title}
    <br/>
    {dateandtime}
    <br/>
    {summary}
    <br/>
    <br/>
    <br/>
  </div>

)

export default Post
