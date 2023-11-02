import "@testing-library/jest-dom"
import { fireEvent, render, screen } from "@testing-library/react"

import { describe, it } from "vitest"
import App from "./App"

// should display the game-container after clicking on the Start Game button
describe("App", () => {
	it("should display the game-container after clicking on the Start Game button", () => {
		render(<App />)
		const startGameButton = screen.getByRole("button")
		fireEvent.click(startGameButton)
		const gameBoard = screen.getByTestId("game-container")
		expect(gameBoard).toBeInTheDocument()
	})
})
