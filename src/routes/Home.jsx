import React from "react";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";
// import {} from "react-icons/fa";

const Home = () => {
  const linkInstagram = {
    target: "_blank",
    href: "https://www.instagram.com/anaclaramelo10/",
  };

  const linkPinterest = {
    target: "_blank",
    href: "https://br.pinterest.com/anaclaramelo10a/pictures/?invite_code=03dac06abb9543ee80757f960cea7917&sender=612349017992491127",
  };

  return (
    <section id="home" className={styles.home}>
      <div className={styles.container}>
        <div className={styles.imageDiv}>
          <img className={styles.image} src="/anaclara.jpg" alt="Ana Clara" />
        </div>
        <div className={styles.textBox}>
          <h1 className={styles.title}>Ana</h1>
          <h1 className={styles.title2}>Clara</h1>
          <h2 className={styles.subTitle}>Modelo de publicidade</h2>
          <p className={styles.paragraph}>
          Aqui na minha página, você encontrará algumas das minhas fotos mais recentes. Cada uma delas representa minha paixão pela moda e pela arte da modelagem. Com minha presença única e habilidades de publicidade, estou pronta para trazer vida a visão criativa de cada projeto que me for confiado.
          </p>
        </div>
      </div>
      <div className={styles.social}>
        <button>Contatos/Social</button>
        <div className={styles.redes}>
          <a className={styles.rede} {...linkInstagram}>
            <p className={styles.spanTitle}>Instagram</p>
            <span>1,8k+</span>
            <p>seguidores</p>
          </a>
          <a className={styles.rede} {...linkPinterest}>
            <p className={styles.spanTitle}>Pinterest</p>
            <span>47+</span>
            <p>fotografias</p>
          </a>
          <div className={styles.rede}>
            <Link style={{fontFamily:'Raleway , sans-serif'}} className={styles.spanTitle} to="/email">Email</Link>
            <p>anaclaramelo10.acr@gmail.com</p>
            <Link className={styles.envEmail} to="/email">Enviar uma mensagem</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
