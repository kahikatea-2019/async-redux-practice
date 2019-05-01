import { RECEIVE_PLANET } from '../actions'

function planets (state = {}, action) {
  switch (action.type) {
    case RECEIVE_PLANET:
      return action.planets

    default:
      return state
  }
}

export default planets
