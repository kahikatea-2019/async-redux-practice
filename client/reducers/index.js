import { combineReducers } from 'redux'

import errorMessage from './error-message'
import subreddits from './subreddits'
import waiting from './waiting'
import character from './character'

export default combineReducers({
  errorMessage,
  subreddits,
  waiting,
  character
})
