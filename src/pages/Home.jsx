import React from "react"
import { useLoaderData, Link } from "react-router-dom"

function Home() {
  const pokemons = useLoaderData()

  console.log(pokemons)

  return (
    <ul>
      {pokemons.map((pokemon) => (
        <li key={pokemon.id}>
          <Link to={`/details/${pokemon.id}`}>{pokemon.name}</Link>
        </li>
      ))}
    </ul>
  )
}

export default Home
