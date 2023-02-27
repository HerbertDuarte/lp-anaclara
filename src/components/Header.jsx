import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.css'

const Header = () => {
  return (
    <header>
      <a href='home' className={styles.logo}>
        <span>Ana</span>
        <span className={styles.logoText2}>Clara</span>
      </a>
      <nav>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/works'>Trabalhos</Link></li>
          <li><Link to='/about'>Sobre</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header