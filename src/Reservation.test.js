import { render, screen } from '@testing-library/react'
import Reservation from './components/Reservation'

test("Has reserve a table", () => {
  render(<Reservation />)
  const element = screen.getByText(/Reserve a Table/i)
  expect(element).toBeInTheDocument()
})

test("render Email component", () => {
  const componenet = render(<Reservation />)
  const childElement = componenet.getByPlaceholderText("Email")
  expect(childElement).toBeInTheDocument()
})
