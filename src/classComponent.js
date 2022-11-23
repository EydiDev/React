import React, { Component } from 'react';
import styled from 'styled-components';
import  styles from "./ccc.module.css"

const Div = styled.div `
display: flex;
    flex-direction: column;
    align-items: center;
    height: 400px;
    justify-content: space-evenly;
`
class classComponent extends Component {
   constructor() {
            super();
            this.state =({
                text : "text 1",
                inputValue : "",
                selectValue : "option3",
            })
            this.clickHandler = this.clickHandler.bind(this)
        } 

        clickHandler (){
            this.setState({
                text : "text 2"
            })
        }
        changeHandler = event =>{
            this.setState({
                inputValue : event.target.value ,
            })
            
        }
     
        selectChangeHandler = event=>{
            this.setState({
                selectValue : event.target.value,
            })
            
        }
        render() {
        const {text , inputValue,selectValue} = this.state;
        const  {changeHandler , clickHandler ,selectChangeHandler} = this;
        return (
            
            <Div>
                <input className={styles.inp} type="text" value={inputValue} onChange={changeHandler}/>
                <p className={styles.p}>{text}</p>
                <button className={styles.btn} type='submit' onClick={clickHandler} >class change</button>
               <select className={styles.slct} value={selectValue} onChange={selectChangeHandler}> 
                <option value='option1' >1</option>
                <option value='option2' >2</option>
                <option value='option3' >3</option>
                <option value='option4' >4</option>
                <option value='option5' >5</option>
                </select>
            </Div>
        );
    }
}

export default classComponent;