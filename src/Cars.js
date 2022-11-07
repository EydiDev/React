import React from "react";


class Car extends React.Component {

    render(){
        return(
            
       
                <h2>my car is {this.props.model} with {this.props.color}  color</h2>
            
        )
    }
}

const Motors =(props)=>{
    return(
          <h2>my motor is {props.mod} and color is {props.col} speed is {props.speed}</h2>
    )
    
    
}



class Jet extends React.Component {
constructor() {
    super();
    this.state = {
        color : "white"
    }
}

 change = ()=> {
    this.setState({
        color : "red"
    })
}
  render() {
    return (
      <>
      <h1>my jet color is {this.state.color}</h1>
      <button onClick={this.change}>change</button>
      
      </>
    )
  }
}


export {Car  , Motors , Jet}