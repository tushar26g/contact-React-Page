import React from 'react'
import styles from './Nav.module.css'

const Nav = () => {
  return (
    <nav className={`${styles.navigation} container`}>
      <img src='/images/Frame.png' alt='logo'/>
      <ul>
        <li>Home</li>
        <li>Contact us</li>
        <li>About us</li>
      </ul>
    </nav>
  )
}

export default Nav
