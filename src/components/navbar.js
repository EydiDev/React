import React from 'react'
import Logo from "../images/666.png";
import  styles from "./navbar.module.css";
function Navbar() {
  return (
    <div className={styles.header}>
        <div className='menusDiv'>
            <ul className={styles.menusUl}>
                <li>home</li>
                <li>about me</li>
                <li>contact us</li>
            </ul>
        </div>
        <div className='logoDiv'>
           <img  className={styles.logo} src={Logo} alt="logo"/>
        </div>
    </div>
  )
}

export default Navbar