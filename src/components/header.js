/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import styled from 'styled-components';
import Photo from "../components/f.png"
import Phot from "../components/6.png"
const Div = styled.div`
width : 100% ; 
height : 100px ;
background-color : purple ; 
display : flex ; 
justify-content  : space-between;
position : fixed ;

@media(max-width : 800px){
    transform : ${props => props.status ? "translateX(0)" : "translateX(100%)"};
    transition : transform 0.3s linear; 
height : 100vh;
width : 200px;
position : fixed ;

    
}
`
const Ul  = styled.ul`
list-style :none ;
width : 400px;
display : flex ; 
justify-content : space-around;
padding-right: 40px;
align-items: center;
font-size : 1.09em;
color :white ; 
font-family :Arial ;
@media(max-width : 800px){

  
    display : flex; 
    flex-direction : column-reverse;
    justify-content : center;
   
}
li{
    cursor : pointer ;
    margin-top : 20px;
    margin-bottom : 20px
}
`
const Div2 = styled.div`
width : 200px;
height : 100px ;

`
const Btn  =styled.div`
width : 50px ;
height :50px ;
border-radius : 50% ; 
border : none ;
margin  : 50px ;
position : fixed  ;
top : -30px;
right: -30px;
@media(min-width : 800px){
    display : none
}

`



class header extends Component {
    constructor() {
    super();
    this.state = {
        status : false ,
    }
}

 burgerMenu = ()=>{
    this.setState({status : !this.state.status});
    if (this.state.status === false) {
        document.querySelector("#gg").src = Phot;
    }else {
        document.querySelector("#gg").src = Photo;
    }
    
}

    render() {
        return (
          <>
            <Div status = {this.state.status}>
                <Ul>
                    <li>about us</li>
                    <li>products</li>
                    <li>blog</li>
                    <li>home</li>
                </Ul>
                <Div2></Div2>
                
            </Div>
            <Btn  onClick={this.burgerMenu}><img id='gg' style={{width : "100%"}} src={Photo}/></Btn>
          </>
         
        );
    }
}

export default header;

