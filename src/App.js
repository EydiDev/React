import React, { Component } from "react";
import Children from "./components/children";
import Number from "./components/number";
import ConditionalRndering from "./components/conditionalRndering";
import Photo1 from "./d.png";
import Photo2 from "./a.png";
import Photo3 from "./b.png";
import Photo4 from "./new.jpg";
class App extends Component {
  constructor() {
    super();
    this.state = {
      text: "hi MOHAMMAD",
      prods : [
        {photo : Photo1, cost : 500 },
        {photo : Photo2, cost : 800 },
        {photo :Photo3, cost : 1000 },
        {photo :Photo4, cost : 100 },
      ]
    };
  }
  sayHi = () => {
    alert("hi mamad");
  };
  render() {
    return (
      <>
      <div>
          <h3>methods and states in props </h3>
          <Children txt={this.state.text} txt2={this.sayHi} /> 
      </div>
      <br /><hr />
      <div>
        {this.state.prods.map(product => <Number image = {product.photo} pricex = {product.cost} />)}
      </div>
      <br /><hr />
      <div>
       <ConditionalRndering/>
      </div>
      </>

    );
  }
}

export default App;
