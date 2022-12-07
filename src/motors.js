import React, { Component } from 'react';
import HOComponent from "./HOComponent"
class motors extends Component {
    render() {
        return (
            <div>
                <button onClick={this.props.clickHandler}>++</button>
                <h1>number of motors : {this.props.number}</h1>
            </div>
        );
    }
}

export default HOComponent(motors);