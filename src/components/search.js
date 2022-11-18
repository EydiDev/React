import React, { Component } from 'react';
import Radium from 'radium';

class search extends Component {
    divStyle ={
        backgroundColor : "#5f25bc",
        width : "100%",
        height:"160px",
        display : "flex",
        justifyContent : "space-around" ,
        alignItems:"center"    ,
       
        ":hover":{
            backgroundColor : "purple",
        },
        "@media (max-width : 1000px)":{
            flexDirection:"column"
        }
    }
    inputStyle={
        marginBottom : "10px",
        height:"30px",
        borderRadius:"50px",
        border:"none",
        padding:"10px",

    }
    render() {
        return (
            <div style={this.divStyle} >
                <h2 >search what you want</h2>
                <div>
                <input style={this.inputStyle} type="text" name="name" />
                <button style={{width:"50px",height:"50px",borderRadius:"50%",border:"none",marginLeft:"5px"}}>ok</button>
                </div>
            </div>
        );
    }
}

export default Radium(search);