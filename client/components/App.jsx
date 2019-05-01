import React from 'react'

import ErrorMessage from './ErrorMessage'
import LoadSubreddit from './LoadSubreddit'
import SubredditList from './SubredditList'
import WaitIndicator from './WaitIndicator'
import LoadAPI from './LoadAPI'
import ApiList from './ApiList'

const App = () => (
  <div className='app'>
    <ErrorMessage />
    <LoadSubreddit>
      <WaitIndicator />
    </LoadSubreddit>
    <SubredditList />
    <LoadAPI >
      <WaitIndicator />
    </LoadAPI >
    <ApiList />
  </div>
)

export default App
