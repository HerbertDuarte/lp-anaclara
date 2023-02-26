import React from 'react'
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
          <li><a href="home">Home</a></li>
          <li><a href="works">Trabalhos</a></li>
          <li><a href="contacts">Sobre</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header