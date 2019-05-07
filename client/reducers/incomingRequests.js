import { REQUEST_POSTS, REQUEST_PLANET, RECEIVE_PLANET, RECEIVE_POSTS } from '../actions'

// TODO: this is mostly redundant with waiting.  Needs to be consoldated.
function incomingRequests (state = 0, action) {
  switch (action.type) {
    case REQUEST_POSTS:
    case REQUEST_PLANET:
      return state + 1

    case RECEIVE_PLANET:
    case RECEIVE_POSTS:
      // Assuming that we always request before receiving.
      return state - 1

    default:
      return state
  }
}

export default incomingRequests
