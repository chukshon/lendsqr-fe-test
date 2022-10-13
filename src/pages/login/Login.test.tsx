import React from "react"
import { render, screen } from "@testing-library/react"
import Login from "./Login"

test("renders learn react link", () => {
  render(<Login />)
  const linkElement = screen.getByText(/welcome!/i)
  // const placeholderElement = screen.getByText(/)
  expect(linkElement).toBeInTheDocument()
})
