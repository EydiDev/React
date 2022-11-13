import React, { Component } from 'react';
import styles from "./banner.module.css"
import B from "../images/6.png"
class Banner extends Component {
    render() {
        return (
            <div className={styles.container}>
                <img src={B} alt="logo"/>
                <div className={styles.texts}>
                    <h1>open your eye</h1>
                    <p>this is how you can see the truth</p>
                </div>
            </div>
        );
    }
}

export default Banner;