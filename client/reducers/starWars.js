import { RECEIVE_STARWARS } from '../actions'

function starWars (state = {}, action) {
  switch (action.type) {
    case RECEIVE_STARWARS:
      return action.starWarsData

    default:
      return state
  }
}

export default starWars
