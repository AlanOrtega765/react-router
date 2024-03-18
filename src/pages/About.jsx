import Link from '../Link'

const i18n = {
  es: {
    title: 'Sobre Mí',
    description: 'Esto es la sección Sobre Mí',
    button: 'Ir a inicio',
  },
  en: {
    title: 'About Me',
    description: 'This is a About Me section',
    button: 'Go to Home',
  },
}

const useI18n = (lang) => {
  return i18n[lang]
}

export default function AboutPage({ routeParams }) {
  const i18n = useI18n(routeParams.lang ?? 'es')

  return (
    <>
      <h1>{i18n.title}</h1>
      <p>{i18n.description}</p>
      <Link to='/'>{i18n.button}</Link>
    </>
  )
}
