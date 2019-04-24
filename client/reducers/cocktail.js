import { RECEIVE_DRINKS } from '../actions'

function cocktails (state = [], action) {
  switch (action.type) {
    case RECEIVE_DRINKS:
      return action.drinks

    default:
      return state
  }
}

export default cocktails
