import { combineReducers } from 'redux'

import errorMessage from './error-message'
import subreddits from './subreddits'
import waiting from './waiting'
import starWars from './starWars'

export default combineReducers({
  errorMessage,
  subreddits,
  waiting,
  starWars
})
