import { RECEIVE_API } from '../actions'

function character (state = {}, action) {
  switch (action.type) {
    case RECEIVE_API:
      return action.character

    default:
      return state
  }
}

export default character
