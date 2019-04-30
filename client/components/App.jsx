import React from 'react'

import ErrorMessage from './ErrorMessage'
import LoadSubreddit from './LoadSubreddit'
import SubredditList from './SubredditList'
import WaitIndicator from './WaitIndicator'
import LoadStarWars from './loadStarWars'
import StarWarsList from './StarWarsList'

const App = () => (
  <div className='app'>
    <ErrorMessage />
    <LoadSubreddit>
      <WaitIndicator />
    </LoadSubreddit>
    <SubredditList />
    <LoadStarWars>
      <WaitIndicator />
    </LoadStarWars>
    <StarWarsList />
  </div>
)

export default App
