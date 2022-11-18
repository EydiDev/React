/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import youtube from '../images/youtube.png'
import instagram from '../images/instagram.webp'
import twitter from '../images/twitter.png'
import styled from 'styled-components';

const SocialMediasDiv = styled.div`
background-color :${props => props.status ? "mediumpurple" : "purple"};
width : 100%;
height : 200px ;
display : flex ;
flex-direction : column;
justify-content : space-around;
align-items : center;


`
const iconDiv = styled.div`
display : flex ; 
padding : 0px ;

`
const Imagee = styled.img`
        
        width : 50px;
       height :50px   ; 
       @media (max-width:600px){
        width : 30px ; 
        height :30px ; 
    }
       
`
const Button = styled.button`
    width : 60px;
    height: 30px;
    
    
`

class socialMedias extends Component {
    constructor() {
        super();
        this.state = {
            status: true
        }
    }


    changeColor = () => {
        this.setState({
            status: !this.state.status
        })
    }

    render() {
        return (
            <div>
                <SocialMediasDiv status={this.state.status}>
                    <h2>social medias</h2>
                    <iconDiv>
                        <a style={{ marginLeft: "0px" }} href={"#"}><Imagee src={youtube} alt="sdf" /></a>
                        <a style={{ marginLeft: "10px" }} href={"#"}><Imagee src={instagram} alt="sdf" /></a>
                        <a style={{ marginLeft: "10px" }} href={"#"}><Imagee src={twitter} alt="sdf" /></a>
                    </iconDiv>
                    <Button onClick={this.changeColor}>change</Button>
                </SocialMediasDiv>
            </div>
        );
    }
}

export default socialMedias;