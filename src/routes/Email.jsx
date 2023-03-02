import styles from './Email.module.css'

const Email = () => {
  return(
  <section>
    <h1 className={styles.title}>Formulário de Email</h1>
    <form className={styles.form} action="https://formsubmit.co/c31ab4f2a9006434dba4f4629634cc3d" method="POST" >
      <input className={styles.email} required type="email" name="email" placeholder='Digite seu email'></input>
      <textarea className={styles.message} required name="mensagem" id="mensagem" cols="30" rows="8" placeholder='Digite sua mensagem'></textarea>
      <input className={styles.button} type="submit" value="Enviar" />
      <input type="hidden" name="_next" value="/thanks"></input>
    </form>
  </section>
  )
}

export default Email