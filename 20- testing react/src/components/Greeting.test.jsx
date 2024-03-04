import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { Greetings } from "./Greeting"

describe("Greetings", () => {
	test("It should render Hello world", () => {
		render(<Greetings name="world" />)

		const element = screen.getByText(/Hello, world!/i)

		expect(element).toBeInTheDocument()
	})

	test("it should render name passed as prop", () => {
		render(<Greetings name="Raj" />)

		const element = screen.getByText(/Hello, Raj!/i)

		expect(element).toBeInTheDocument()
	})

	test("it should increment count by 1 when button is clicked", () => {
		render(<Greetings name="Raj" />)

		const button = screen.getByRole("button")
		const count = screen.getByText("0")

		expect(count).toBeInTheDocument()

		button.click()

		const updatedCount = screen.getByText("1")

		expect(updatedCount).toBeInTheDocument()
	})
	// same test but using userEvent
	test("it should increment count by 1 when button is clicked (UserEvent)", () => {
		render(<Greetings name="Raj" />)
		const button = screen.getByRole("button")
		const count = screen.getByText("0")
		expect(count).toBeInTheDocument()
		userEvent.click(button)
		const updatedCount = screen.getByText("1")
		expect(updatedCount).toBeInTheDocument()
	})
})
