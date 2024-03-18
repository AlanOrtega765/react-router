console.log('HOLA DESDE Search')

export default function SearchPage({ routeParams }) {
  const query = routeParams.query

  return <h1>Has buscado {query}</h1>
}
