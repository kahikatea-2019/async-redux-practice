import { combineReducers } from 'redux'

import errorMessage from './error-message'
import subreddits from './subreddits'
import waiting from './waiting'
import cocktail from './cocktail'

export default combineReducers({
  errorMessage,
  subreddits,
  waiting,
  cocktail
})
