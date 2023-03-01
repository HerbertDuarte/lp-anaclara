import Slider from '../components/Slider'
import styles from './Works.module.css'
// className={styles.}

const Works = () => {

  const slides = [
    { url: "/slide1.jpeg", title: "Ana Clara" },
    { url: "/slide2.jpeg", title: "Ana Clara"},
    { url: "/slide3.jpeg", title: "Ana Clara" },
    { url: "/slide4.jpeg", title: "Ana Clara"},
  ];



  return (
    <section className={styles.worksSection}>
      <h1 className={styles.title}>Meus trabalhos:</h1>
      <p className={styles.text}>Trabalho feito para @casademaria.presentes e @dai.acessorios</p>
      <div>
        <Slider slides={slides}/>
      </div>
    </section>
  )
}

export default Works