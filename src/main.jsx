import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

import App from "./App.jsx"

import "./index.css"
import Home from "./pages/Home.jsx"
import About from "./pages/About.jsx"
import NotFound from "./pages/NotFound.jsx"
import Details from "./pages/Details.jsx"

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () =>
          fetch("https://lchastanet.github.io/mock-api/data/pokemon.json").then(
            (res) => res.json()
          ),
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/details/:id",
        element: <Details />,
        loader: ({ params }) =>
          fetch("https://lchastanet.github.io/mock-api/data/pokemon.json")
            .then((res) => res.json())
            .then((pokemons) =>
              pokemons.find((pokemon) => pokemon.id == params.id)
            ),
      },
    ],
    errorElement: <NotFound />,
  },
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
