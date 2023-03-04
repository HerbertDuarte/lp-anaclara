import Slider from "../components/Slider";
import styles from "./Works.module.css";

const Works = () => {
  const slides1 = [
    "/work1/slide1-1.jpeg",
    "/work1/slide1-2.jpeg",
    "/work1/slide1-3.jpeg",
    "/work1/slide1-4.jpeg",
  ];

  const slides2 = [
    "/work2/slide1.jpeg",
    "/work2/slide2.jpeg",
    "/work2/slide3.jpeg",
    "/work2/slide4.jpeg",
  ];

  const slides3 =[
    "/work3/slide1.jpg",
    "/work3/slide2.jpg",
    "/work3/slide3.jpeg",
    "/work3/slide4.jpg"
  ]

  const slides4 = [
    "/work4/slide1.jpg",
    "/work4/slide2.jpg",
    "/work4/slide3.jpg",
    "/work4/slide4.jpg",
  ];
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Meus trabalhos</h1>

      <div>

        <p className={styles.description}>
          <span>Trabalho feito para </span>
          <a href="https://www.instagram.com/casademaria.presentes/">
            @casademaria.presentes
          </a><span> e </span>
          <a href="https://www.instagram.com/dai.acessorios/">
            @dai.acessorios
          </a>
        </p>

        <Slider images={slides1} />

        <hr />{/* ------------------------------- */}


        <p className={styles.description}>
        Trabalho feito para loja de calçados <a href="https://www.instagram.com/iris_calcados.vca/">@iris_calcados.vca</a>
        </p>

        <Slider images={slides2} />
        
        <hr />{/* ------------------------------- */}

        <p className={styles.description}>
        <span>Trabalho feito para loja de roupas</span> <a href="https://www.instagram.com/betymodas/">@betymodas</a>
        </p>
        
        <Slider images={slides3} />

        <hr />{/* ------------------------------- */}


        <p className={styles.description}>
        <span>Trabalho feito para loja de roupas </span><a href="https://www.instagram.com/divastyleeee/">@divastyleeee</a>
        </p>

        <Slider images={slides4} />
        
      </div>
    </section>
  );
};

export default Works;
