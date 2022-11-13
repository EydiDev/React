import React, { Component } from 'react';
import Product from './product'
import chakra from '../images/7chakras.jpg'
import fourOnsor from '../images/4onsor.jpg'
import Meditation from '../images/meditation.jpg'
import styles from './products.module.css'
class Products extends Component {
    render() {
        return (
            <div className={styles.prods}>
                <Product className={styles.pp} image={chakra} name="chakra healing" const="100$"   />
                <Product className={styles.pp} image = {fourOnsor} name="amoozeshe 4 onsor" const="200$" />
                <Product className={styles.pp} image = {Meditation}  name="meditaion learning" const="300$"/>
            </div>
        );
    }
}

export default Products;