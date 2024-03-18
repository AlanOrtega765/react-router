import Link from '../Link'

export default function Page404() {
  return (
    <>
      <h1>Error 404</h1>
      <p>Ups!, no se ha encontrado la ruta especificada</p>
      <Link to='/'>Ir a Inicio</Link>
    </>
  )
}
