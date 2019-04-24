import React from 'react'
import { connect } from 'react-redux'

import Person from './Person'

const ApiList = props => {
  const { character } = props

  return (
    <div>
      <Person
        key={character.name}
        name={character.name}
      />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    character: state.character
  }
}

export default connect(
  mapStateToProps
)(ApiList)
