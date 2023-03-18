import React from 'react'
import { Link } from 'react-router-dom'
import styles from './NotFound.module.css'

const NotFound = () => {
  return (
    <div className={styles.nf}>
      <h1>Erro 404</h1>
      <h2>Nenhuma página foi encontrada.</h2>
      <Link className={styles.button} to="/">Retornar para a home</Link>
    </div>
  )
}

export default NotFound