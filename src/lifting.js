import React, { Component } from 'react'

export default class lifting extends Component {
  render() {
  const {number , changeHandler} = this.props;
    return (
      <div>
        <h1>{number}</h1>
        <button onClick={changeHandler}>++</button>
      </div>
    )
  }
}
