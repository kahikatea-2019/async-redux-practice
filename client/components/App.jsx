import React from 'react'

import ErrorMessage from './ErrorMessage'
import LoadSubreddit from './LoadSubreddit'
import SubredditList from './SubredditList'
import WaitIndicator from './WaitIndicator'
import LoadApi from './LoadApi'
import ApiList from './ApiList'

const App = () => (
  <div className='app'>
    <ErrorMessage />
    <LoadSubreddit>
      <WaitIndicator />
    </LoadSubreddit>
    <SubredditList />
    <LoadApi >
      <WaitIndicator />
    </LoadApi >
    <ApiList />
  </div>
)

export default App
