import {
  SHOW_ERROR,
  REQUEST_POSTS,
  RECEIVE_POSTS, RECEIVE_DRINKS } from '../actions'

const waiting = (state = false, action) => {
  switch (action.type) {
    case REQUEST_POSTS:
      return true

    case RECEIVE_POSTS:
      return false

    case RECEIVE_DRINKS:
      return false

    case SHOW_ERROR:
      return false

    default:
      return state
  }
}

export default waiting
