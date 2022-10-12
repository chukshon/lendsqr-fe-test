import React from "react"
import { render, screen } from "@testing-library/react"
import App from "./App"
import Login from "./pages/login/Login"

test("renders learn react link", () => {
  render(<Login />)
  const linkElement = screen.getByText(/welcome!/i)
  expect(linkElement).toBeInTheDocument()
})
