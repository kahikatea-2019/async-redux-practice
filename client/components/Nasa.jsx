import React from 'react'
import { connect } from 'react-redux'

const Nasa = ({ nasa }) => (
  <div className='post'>
    <h3>{nasa.title}</h3>
    <img src ={nasa.hdurl}/>
    <div>{nasa.explanation}</div>
    <hr />
  </div>
)
const mapStateToProps = (state) => {
  return {
    nasa: state.nasa
  }
}

export default connect(
  mapStateToProps
)(Nasa)
