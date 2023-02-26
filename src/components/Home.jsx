import React from 'react'
import styles from './Home.module.css'
// import {} from "react-icons/fa";

const Home = () => {

  const linkInstagram = {
    target: '_blank',
    href:'https://linkDoInsta.com'
  }

  const linkPinterest = {
    target: '_blank',
    href:'https://linkDoInsta.com'
  }

  return (
    <section id='home' className={styles.home}>
      <div className={styles.container}>
        <div className={styles.imageDiv}>
          <img className={styles.image} src="/anaclara.jpg" alt="Ana Clara" />
        </div>
        <div className={styles.textBox}>
          <h1 className={styles.title}>Ana</h1>
          <h1 className={styles.title2}>Clara</h1>
          <h2 className={styles.subTitle}>Modelo de publicidade</h2>
          <p className={styles.paragraph}>
          Uma verdadeira amante de fotografia, beleza e moda desde muito pequena. Tenho 20 anos,  curso Estética e Cosmética e futuramente serei maquiadora profissional.  Sempre fui extremamente vaidosa e gosto de me arrumar para qualquer lugar.</p>
        </div>
      </div>
      <div className={styles.social}>
        <button>Contatos/Social</button>
        <div className={styles.redes}>
          <a {...linkInstagram}>
            <p>Instagram</p>
            <span>1,8k+</span>
            <p>seguidores</p>
          </a>
          <a {...linkPinterest}>
            <p>Pinterest</p>
            <span>50+</span>
            <p>fotografias</p>
          </a>
          <div>
            <p>Email</p>
            <p>anaclaramelo10.acr@gmail.com</p>
            <a href='https://herbertduarte.github.io/'>enviar uma mensagem</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home