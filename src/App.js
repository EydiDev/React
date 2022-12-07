import React, { PureComponent } from "react";
import Child from "./child";
import Ref from "./ref";
import Port from "./Port";
import Lifting from "./lifting";
import Cars from "./cars"
import Motors from "./motors"
class App extends PureComponent {
  constructor() {
    super();
    this.state = ({
      text : "HI",
      liftingNum : 0
    })
  }
  change = ()=> {
    this.setState({
      text: "HI"
    })
  }
  changeHandler = ()=>{
    this.setState({
      liftingNum : this.state.liftingNum + 1
    })
  } 
  render() {
    console.log("app rendered");
    return (
          <div>
              pureComponent
              <h3>{this.state.text}</h3>
              <button onClick={this.change}>change</button>
            <br/>
            <br/>
              <Child text={this.state.text} />
            <br />
            <hr />
              ref
              <Ref header = {this.h1} />  
            <br />
            <hr />
              portal : display in none 
              <Port  />
            <br />
            <hr />
              lifting state up
              <Lifting number={this.state.liftingNum} changeHandler = {this.changeHandler}/>
            <br />
            <hr />
            Higher Order Component
            <Cars addNum={5} />
            <Motors addNum={1}/>
          </div>

    );
  }
}

export default App;
