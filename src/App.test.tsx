import React from "react"
import { render, screen } from "@testing-library/react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import App from "./App"
import Login from "./pages/login/Login"

test("renders learn react link", () => {
  render(
    <Router>
      <Login />
    </Router>
  )
  const linkElement = screen.getByText(/welcome!/i)
  expect(linkElement).toBeInTheDocument()
})
