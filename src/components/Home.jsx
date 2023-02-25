import React from 'react'
import styles from './Home.module.css'
// import {} from "react-icons/fa";

const Home = () => {
  return (
    <section id='home' className={styles.home}>
      <div className={styles.container}>
        <div className={styles.imageDiv}>
          <img className={styles.image} src="/init-img.jpg" alt="Ana Clara" />
        </div>
        <div className={styles.textBox}>
          <h1 className={styles.title}>Ana</h1>
          <h1 className={styles.title2}>Clara</h1>
          <h2 className={styles.subTitle}>Modelo comercial</h2>
          <p className={styles.paragraph}>
          Uma verdadeira amante de fotografia, beleza e moda desde muito pequena. Tenho 20 anos,  curso Estética e Cosmética e futuramente serei maquiadora profissional.  Sempre fui extremamente vaidosa e gosto de me arrumar para qualquer lugar.</p>
        </div>
      </div>
    </section>
  )
}

export default Home