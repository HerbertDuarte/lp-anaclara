import styles from './Slider.module.css'

export const Slider = () => {

  return (
  <div className={styles.container}>
    <div className={styles.slider}>
      <div className={styles.slideDiv}><img src="/slide1.jpeg" alt="Ana Clara" /></div>
      <div className={styles.slideDiv}><img src="/slide2.jpeg" alt="Ana Clara" /></div>
      <div className={styles.slideDiv}><img src="/slide3.jpeg" alt="Ana Clara" /></div>
      <div className={styles.slideDiv}><img src="/slide4.jpeg" alt="Ana Clara" /></div>
    </div>
  </div>
  )
  
}

export default Slider;