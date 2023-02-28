import styles from "./About.module.css";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className={styles.aboutSection}>
      <h1  className={styles.title}>Olá, sou Clara!</h1>
      <img  className={styles.image} src="/secont-img.jpg" alt="ana clara" />
      <p className={styles.text}>
        Uma verdadeira amante de fotografia, beleza e moda desde
        muito pequena. Tenho 20 anos, curso Estética e Cosmética e futuramente
        serei maquiadora profissional. Sempre fui extremamente vaidosa e gosto de
        me arrumar para qualquer lugar. Tive uma conexão com a fotografia desde os
        15 anos, quando meus pais me presentearam com uma câmera fotográfica.
        Nunca tive vergonha alguma de pousar para fotos e logo fiz um curso de
        modelo, concluí e recebi meu certificado. Já fiz alguns trabalhos como
        modelo em Encruzilhada-Ba e Vitória da Conquista-Ba Sou muito
        compromissada e dedicada em tudo que faço! Logo recebo avaliações
        positivas devido minha competência com os trabalhos entregues.
      </p>
      <Link to='/works'>Conheça alguns dos meus trabalhos</Link>
    </section>
  );
};

export default About;
