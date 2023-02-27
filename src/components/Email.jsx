import styles from './Email.module.css'

const Email = () => {
  return(
  <>
    <h1 className={styles.title}>Formulário de Email</h1>
    <form className={styles.form} action="https://formsubmit.co/anaclaramelo10.acr@gmail.com" method="POST" >
      <input className={styles.email} type="email" name="email" placeholder='Digite seu email'></input>
      <textarea className={styles.message} name="mensagem" id="mensagem" cols="30" rows="8" placeholder='Digite sua mensagem'></textarea>
      <input className={styles.button} type="submit" value="Enviar" />
    </form>
  </>
  )
}

export default Email