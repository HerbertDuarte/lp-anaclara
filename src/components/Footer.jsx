const Footer = () => {

  const myLink = {
    target:'_blank',
    href: "https://herbertduarte.vercel.app/"
  }

  return (
    <footer>
      Site desenvolvido por <a {...myLink}>Herbert Duarte</a>
    </footer>
  )
}

export default Footer