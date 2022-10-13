import React from "react"
import { render, screen } from "@testing-library/react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from "./Login"

test("renders welcome", () => {
  render(
    <Router>
      <Login />
    </Router>
  )
  const linkElement = screen.getByText(/welcome!/i)
  expect(linkElement).toBeInTheDocument()
})

test("checks if the login button is disabled", () => {
  render(
    <Router>
      <Login />
    </Router>
  )
  const linkElement = screen.getByTestId("login-button")
  expect(linkElement).toBeInTheDocument()
  expect(linkElement).toBeDisabled()
})

test("checks if all inputs has a placeholder", () => {
  render(
    <Router>
      <Login />
    </Router>
  )
  const emailInput = screen
    .getByPlaceholderText("Email")
    .getAttribute("placeholder")
  const passwordInput = screen
    .getByPlaceholderText("Password")
    .getAttribute("placeholder")
  expect(emailInput).toBe("Email")
  expect(passwordInput).toBe("Password")
})
