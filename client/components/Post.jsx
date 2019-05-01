import React from 'react'

const redditPost = ({ title, dateAndTime, summary }) => (
  <div>{title}
    <br/>
    {dateAndTime}
    <br/>
    {summary}
    <br/>
  </div>
)

export default redditPost
