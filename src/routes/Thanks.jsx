import { Link } from 'react-router-dom'
import styles from './Thanks.module.css'

const Thanks = () => {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Obrigada por enviar uma mensagem!</h1>
      <Link className={styles.link} to='/'>Voltar</Link>
    </section>
  )
}

export default Thanks