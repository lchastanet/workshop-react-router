import React from "react"
import { useLoaderData } from "react-router-dom"

function Details() {
  const pokemon = useLoaderData()

  return (
    <div>
      <h1>{pokemon.name}</h1>
      <img src={pokemon.img} alt={pokemon.name} />
      <ul>
        {pokemon.types.map((type) => (
          <li key={type}>{type}</li>
        ))}
      </ul>
    </div>
  )
}

export default Details
