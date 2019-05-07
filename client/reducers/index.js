import { combineReducers } from 'redux'

import errorMessage from './error-message'
import incomingRequests from './incomingRequests'
import subreddits from './subreddits'
import waiting from './waiting'
import planets from './starWarsPlanets'

export default combineReducers({
  errorMessage,
  incomingRequests,
  subreddits,
  waiting,
  planets
})
