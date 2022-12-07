import React, { Component } from 'react';
import HOComponent from "./HOComponent"

class cars extends Component {
    render() {
        return (
            <div>
             <button onClick={this.props.clickHandler}>++</button>
             <h1>number of cars : {this.props.number}</h1>
            </div>
        );
    }
}

export default HOComponent(cars);