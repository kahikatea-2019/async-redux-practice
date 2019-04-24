import React from 'react'

const Post = ({ created, title, preview }) => (
  <>
  <div>Date Created: {created} <br />
  Post Title: {title} <br />
  Preview text: {preview}..... <br />
  </div>
  </>
)

export default Post
