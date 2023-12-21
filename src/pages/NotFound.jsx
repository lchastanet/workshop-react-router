import React from "react"
import { Link } from "react-router-dom"

function NotFound() {
  return (
    <>
      <h1>404 NotFound</h1>
      <Link to="/">Go back to Home</Link>
    </>
  )
}

export default NotFound
