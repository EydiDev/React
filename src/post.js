import React, { Component, createRef } from 'react';
const Div =  {
    display: 'flex',
alignItems: 'center',
flexDirection: 'column',
margin: '20px 0',
height: '400px',
justifyContent: 'space-evenly'
}
class post extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            fnValue : "",
            lnValue : "",
            mailValue : ""
        })
     
    }
    fnchangeHandler = (e)=>{
        this.setState({
            fnValue : e.target.value
        })}
    lnchangeHandler = (e)=>{
        this.setState({
            lnValue : e.target.value
        })}
    mailChangeHandler = (e)=>{
        this.setState({
            mailValue : e.target.value
        })
    }
sendData = () =>{
    console.log("Clicked");
    fetch("https://dummyjson.com/users/add",{
        method :"POST",
        body : JSON.stringify({
            "userId": 10,
            "firstName": this.state.fnValue,
            "lastName": this.state.lnValue,
            "email" : this.state.mailValue,
            
    }),
    headers:{
        'Content-type' : 'application/json ; charset=UTF-8'
    },
})
.then((response) => response.json())
.then((json) => console.log(json));
// console.log();
}

    render() {
        return (
            <div style={Div}> 
                enter your name :  
                <input   type="text" value={this.state.fnValue} onChange={this.fnchangeHandler}/>
                enter your last name : 
                <input  type="text"  value={this.state.lnValue} onChange={this.lnchangeHandler}/>
                enter your gmail : 
                <input  type="text"  value={this.state.mailValue} onChange={this.mailChangeHandler}/>
                <button onClick={this.sendData}>send</button>
            </div>
        );
    }
}

export default post;