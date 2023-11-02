import { render, screen } from "@testing-library/react"
import PreGame from "./preGame.component"

describe("PreGame", () => {
	it("should render Start Game button", () => {
		render(<PreGame />)
		const startGameButton = screen.getByText(/Start Game/i)
		console.log(startGameButton)
	})
})
