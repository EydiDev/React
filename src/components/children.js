import React, { Component } from 'react'

export default class children extends Component {
    say
  render() {
    return (
      <div>{this.props.txt}
      <br / >
            <button style={{width: "100px" , height : "30px"}} onClick={this.props.txt2}>alert</button>
      </div>
    )
  }
}
