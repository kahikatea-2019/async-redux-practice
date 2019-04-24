import {
  SHOW_ERROR,
  REQUEST_POSTS,
  RECEIVE_POSTS,
  REQUEST_NASA,
  RECEIVE_NASA } from '../actions'

const waiting = (state = false, action) => {
  switch (action.type) {
    case REQUEST_POSTS:
      return true

    case RECEIVE_POSTS:
      return false

    case SHOW_ERROR:
      return false

    case REQUEST_NASA:
      return true

    case RECEIVE_NASA:
      return false

    default:
      return state
  }
}

export default waiting
