import React, { Component } from 'react';
import Radium from 'radium';

class search extends Component {
    divStyle ={
        backgroundColor : "#5f25bc",
        width : "100%",
        height:"100px",
        display : "flex",
        justifyContent : "space-around" ,
        alignItems:"center"    ,
        ":hover":{
            backgroundColor : "purple",
        },
        "@media (max-width : 600px)":{
            flexDirection:"column"
        }
    }

    render() {
        return (
            <div style={this.divStyle} >
                <h2 >search what you want</h2>
                <input  type="text" name="name" />
            </div>
        );
    }
}

export default Radium(search);