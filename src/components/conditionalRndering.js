import React, { Component } from 'react'

export default class conditionalRndering extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            isLoggedIn : false ,
        })
    }
    change = () =>{
        this.setState ({
            isLoggedIn : !this.state.isLoggedIn
        })
    }
  render() {
    let text ;
if (this.state.isLoggedIn) {
    text  = <h2>you are logged in </h2>;
    }
    
else{
    text  =<button>log in</button>
}
return (
    <>
        <p>{`is loged in ? ${this.state.isLoggedIn} ` }</p><button onClick={this.change}>*</button>
        <div>{text}</div>
        <div>{this.state.isLoggedIn ? <h2>logged in</h2> : <button>log in </button>}</div>
    </>
      )

  }
}
