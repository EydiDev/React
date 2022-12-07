import React, { Component } from 'react';

class Ref extends Component {
    constructor(props) {
        super(props);
        this.myInput= React.createRef();
   
    }
    show = () =>{
        alert(this.myInput.current.value)
      
    }

    componentDidMount() {
        this.myInput.current.focus()
        
    }
   
    render() {
        return (
            <div>
                <button onClick={this.show}>click</button>
                <input ref={this.myInput} type="text"  />
               
            </div>
        );
    }
}

export default Ref;