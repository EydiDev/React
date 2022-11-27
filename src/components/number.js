import React, { Component } from 'react'

export default class number extends Component {
    constructor() {
        super();
        this.state =({
            num : 0 , 
            
   
           
        })
    }
    imgStyle = {
      width : "192px",
      height : "108px",
     
      borderRadius : "20px",
      margin : "10px"
    }
    highHandler = () => { 
        this.setState({
            num: this.state.num + 1 
        })
    }
    lowHandler = () => { 
        if (this.state.num >0) {
             this.setState({
            num: this.state.num -1
        })
        }
       
    }
  render() {
   let style ;
    if (this.state.num === 0) {
        style = {opacity  :"50%"}
    }
    let howPrice  ;
    if (this.state.num > 0) {
      howPrice = <h3>price is : {this.props.pricex } x {this.state.num}  = {this.state.num * this.props.pricex} $</h3>
}else {
  howPrice = <h3>price is : {this.props.pricex} $</h3>
}
    return (
      <div style={{display : "flex" ,alignItems : "center" ,  justifyContent : "center" , flexDirection : "column"}}>
      <img style={this.imgStyle} src={this.props.image} alt = "sdfsdfs"/>
      <div style={{display : "flex",alignItems : "center" , justifyContent : "center" , width : "100%" , height:"200px"}}>
        <button onClick={this.lowHandler} style={style} >less</button>
        <h3 style={{margin : "10px"}}>{this.state.num}</h3>
        <button onClick={this.highHandler}>more</button>
        
      </div>
      <h3>{howPrice}  </h3>
      </div>
    )
  }
}
