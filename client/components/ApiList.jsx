import React from 'react'
import { connect } from 'react-redux'

import GotCharacter from './GotCharacter'

const ApiList = props => {
  const { name } = props
  return (
    <div>
      <GotCharacter
        Character={name}
      />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    character: state.GotCharacter
  }
}

export default connect(
  mapStateToProps
)(ApiList)
