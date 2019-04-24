import { combineReducers } from 'redux'

import errorMessage from './error-message'
import subreddits from './subreddits'
import waiting from './waiting'
import nasa from './nasa'

export default combineReducers({
  errorMessage,
  subreddits,
  waiting,
  nasa
})
