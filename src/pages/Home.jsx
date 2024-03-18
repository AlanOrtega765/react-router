import Link from '../Link'

export default function HomePage() {
  return (
    <>
      <h1>Home</h1>
      <p>Esta es la página de inicio de React Router.</p>
      <Link to='/about'>Ir a inicio</Link>
    </>
  )
}
