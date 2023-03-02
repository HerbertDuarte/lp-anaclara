import Slider from '../components/Slider'
import styles from './Works.module.css'
// className={styles.}

const Works = () => {

  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Meus trabalhos</h1>
      <p className={styles.text}>Apresentação da nova linha de óculos <a href="https://www.maumau.com.br/oculos-femininos">Mau Mau</a>.</p>
      <div>
        <Slider/>
      </div>
      <p className={styles.description}>Trabalho feito para <a href="https://www.instagram.com/casademaria.presentes/">@casademaria.presentes</a> e <a href="https://www.instagram.com/dai.acessorios/">@dai.acessorios</a></p>
    </section>
  )
}

export default Works