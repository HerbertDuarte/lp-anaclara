import styles from "./Slider.module.css";

export const Slider = ({ images }) => {
  return (
    <div className={styles.container}>
      <div className={styles.slider}>
        {images.map((image, index) => (
          <div key={index} className={styles.slideDiv}>
            <img src={image} alt="Ana Clara" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
