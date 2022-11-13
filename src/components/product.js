import React, { Component } from 'react';
import styles from './product.module.css'
class Product extends Component {
    render() {
        const {image} = this.props;
        return (
            <div className={styles.mahsool}>
                <img src={image}/>
                <div className={styles.proinf}>
                <h2>this is {this.props.name}</h2>
                <p>price : {this.props.const}</p>
                </div>
            </div>
        );
    }
}

export default Product;