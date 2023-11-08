import { useEffect, useState } from "react"
import { WINNING_COMBINATIONS } from "../../utils/ticTacToeWinningCombinations"

const INITITAL_GRID = [
	[null, null, null],
	[null, null, null],
	[null, null, null],
]

export function GameBoard({ playerTurn, setPlayerTurn, players, setWinner, addLog }) {
	const [grid, setGrid] = useState(INITITAL_GRID)

	useEffect(() => {
		const winner = checkWinner()

		if (winner) {
			if (winner === "tie") {
				setWinner("tie")
				return
			}

			const winnerName = players.find((player) => player.symbol === winner).name
			setWinner(winnerName)
			return
		}
	}),
		[grid]

	const checkWinner = () => {
		// check for tie
		const isTie = grid.every((row) => row.every((box) => box !== null))
		if (isTie) {
			return "tie"
		}

		for (let i = 0; i < WINNING_COMBINATIONS.length; i++) {
			const [a, b, c] = WINNING_COMBINATIONS[i]
			const boxA = grid[a[0]][a[1]]
			const boxB = grid[b[0]][b[1]]
			const boxC = grid[c[0]][c[1]]

			if (boxA && boxA === boxB && boxA === boxC) {
				return boxA
			}
		}

		return null
	}

	const handlePlayerClick = (e) => {
		const x = e.target.dataset.x
		const y = e.target.dataset.y
		updateGrid(x, y, playerTurn)

		addLog({ id: Math.random(), player: playerTurn, x: x, y: y })
		setPlayerTurn(playerTurn === players[0].symbol ? players[1].symbol : players[0].symbol)
	}

	const updateGrid = (x, y, value) => {
		const newGrid = structuredClone(grid)
		newGrid[x][y] = value
		setGrid(newGrid)
	}

	return (
		<div id="game-board">
			<ol>
				{grid.map((line, x) => {
					return line.map((box, y) => {
						return (
							<button
								data-x={x}
								data-y={y}
								key={`${x}-${y}`}
								onClick={handlePlayerClick}
								disabled={box !== null}
							>
								{box}
							</button>
						)
					})
				})}
			</ol>
		</div>
	)
}
