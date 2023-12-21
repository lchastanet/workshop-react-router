import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

function Header() {
  const [total, setTotal] = useState(0)

  useEffect(() => {
    fetch("https://lchastanet.github.io/mock-api/data/pokemon.json")
      .then((res) => res.json())
      .then((pokemons) => setTotal(pokemons.length))
  }, [])

  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
      <p>{total}</p>
    </header>
  )
}
export default Header
