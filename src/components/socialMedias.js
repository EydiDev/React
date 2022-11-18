/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import youtube from '../images/youtube.png'
import instagram from '../images/instagram.webp'
import twitter from '../images/twitter.png'
import styled from 'styled-components';

const SocialMediasDiv =styled.div`
background-color : mediumpurple ;
width : 100%;
height : 160px ;
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

class socialMedias extends Component {
    
        render() {
       
        return (
            <div>
                <SocialMediasDiv>
                    <h2>social medias</h2>
                <iconDiv>
                   <a style={{marginLeft : "7px"}}  href={"#"}><Imagee  src={youtube} alt="sdf"/></a>
                   <a style={{marginLeft : "7px"}} href={"#"}><Imagee  src={instagram} alt="sdf"/></a>
                   <a style={{marginLeft : "7px"}} href={"#"}><Imagee  src={twitter} alt="sdf"/></a>
                    </iconDiv>
                </SocialMediasDiv>
            </div>
        );
    }
}

export default socialMedias;