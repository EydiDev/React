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
        this.fn= React.createRef();
        this.ln= React.createRef();
        this.gmail= React.createRef();
   
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
            "firstName": this.fn.current.value,
            "lastName": this.ln.current.value,
            "email" : this.gmail.current.value,
            
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
                <input  ref={this.fn} type="text" value={this.state.fnValue} onChange={this.fnchangeHandler}/>
                enter your last name : 
                <input ref={this.ln} type="text"  value={this.state.lnValue} onChange={this.lnchangeHandler}/>
                enter your gmail : 
                <input ref={this.gmail} type="text"  value={this.state.mailValue} onChange={this.mailChangeHandler}/>
                <button onClick={this.sendData}>send</button>
            </div>
        );
    }
}

export default post;