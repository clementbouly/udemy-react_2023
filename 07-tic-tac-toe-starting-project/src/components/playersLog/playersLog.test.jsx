import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { PlayerLogs } from "./playersLog.component"

describe("PlayersLog", () => {
	describe("should render the list of players log", () => {
		const logs = [
			{ id: 3, player: "Max", x: 0, y: 0 },
			{ id: 2, player: "Léon", x: 0, y: 1 },
			{ id: 1, player: "Max", x: 0, y: 2 },
		]
		render(<PlayerLogs logs={logs} />)

		const playerLogs = screen.getAllByRole("listitem")

		it("with the correct length", () => {
			expect(playerLogs.length).toBe(3)
		})

		it("with the correct content", () => {
			expect(playerLogs[0]).toHaveTextContent("Max played at 0, 0")
			expect(playerLogs[1]).toHaveTextContent("Léon played at 0, 1")
			expect(playerLogs[2]).toHaveTextContent("Max played at 0, 2")
		})
	})
    
})
