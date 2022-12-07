import React, { Component } from 'react'

const Counter = OldComponent =>{
    class newComponent extends Component{
        constructor(props) {
            super(props);
            this.state=({
                number  : 0
            })
        }
            clickHandler = ()=>{
                this.setState(prevState =>({
                    number : this.state.number + this.props.addNum
                }))
            }
        
        render(){
            return <OldComponent number={this.state.number} clickHandler={this.clickHandler} {...this.props}/>
        }
        
    }
    return newComponent
}
export default Counter ; 
