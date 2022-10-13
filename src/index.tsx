import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./styles/index.scss"
import { MenuProvider } from "./context/MenuContextProvider"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(
  <React.StrictMode>
    <MenuProvider>
      <App />
    </MenuProvider>
  </React.StrictMode>
)
