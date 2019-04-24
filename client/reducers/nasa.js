import { RECEIVE_NASA } from '../actions'

function nasa (state = [], action) {
  switch (action.type) {
    case RECEIVE_NASA:
      return action.nasaData

    default:
      return state
  }
}

export default nasa
