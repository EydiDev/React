import React, { Component, createRef } from 'react';
import axios from 'axios';



const Div =  {
    display: 'flex',
alignItems: 'center',
flexDirection: 'column',
margin: '20px 0',
height: '400px',
justifyContent: 'space-evenly',
gridColumn: "2",
}
class axiosPost extends Component {
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

    const {fnValue , lnValue , mailValue} = this.state;
    const boody = {
        "userId": 10,
            "firstName": fnValue,
            "lastName": lnValue,
            "email" : mailValue,
    }
    console.log("Clicked");
    axios.post("https://dummyjson.com/users/add", boody )
.then((response) => console.log(response.data))

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

export default axiosPost;