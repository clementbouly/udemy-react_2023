import { useEffect, useState } from "react"
import { GameContainer } from "./components/gameContainer/gameContainer.component"
import { Header } from "./components/header/header.component"
import { PlayerLogs } from "./components/playersLog/playersLog.component"
import PreGame from "./components/preGame/preGame.component"

const INITIAL_GRID = [
	{ x: 0, y: 0, value: null },
	{ x: 0, y: 1, value: null },
	{ x: 0, y: 2, value: null },
	{ x: 1, y: 0, value: null },
	{ x: 1, y: 1, value: null },
	{ x: 1, y: 2, value: null },
	{ x: 2, y: 0, value: null },
	{ x: 2, y: 1, value: null },
	{ x: 2, y: 2, value: null },
]

const SYMBOLS = ["🏹", "🏀"]
// 🕸 ⭐️

function App() {
	const [grid, setGrid] = useState(INITIAL_GRID)
	const [gameStarted, setGameStarted] = useState(false)
	const [logs, setLogs] = useState([])
	const [winner, setWinner] = useState(null)
	const [players, setPlayers] = useState([
		{ name: "Max", symbol: SYMBOLS[0] },
		{ name: "Léon", symbol: SYMBOLS[1] },
	])

	const symbol1 = players[0].symbol
	const symbol2 = players[1].symbol

	const [playerTurn, setPlayerTurn] = useState(symbol1)

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

	const editPlayer = (symbol, newName) => {
		const newPlayers = players.map((player) => {
			if (player.symbol === symbol) {
				return { ...player, name: newName }
			}
			return player
		})
		setPlayers(newPlayers)
	}
	const handlePlayerClick = (e) => {
		const x = e.target.dataset.x
		const y = e.target.dataset.y
		updateGrid(x, y, playerTurn)

		setLogs([...logs, { id: logs.length, player: playerTurn, x: x, y: y }])
		setPlayerTurn(playerTurn === players[0].symbol ? players[1].symbol : players[0].symbol)
	}

	const updateGrid = (x, y, value) => {
		const newGrid = grid.map((box) => {
			if (box.x === Number(x) && box.y === Number(y)) {
				return { ...box, value: value }
			}
			return box
		})
		setGrid(newGrid)
	}

	const checkWinner = () => {
		const winningCombination = [
			[0, 1, 2], // top row
			[3, 4, 5], // middle row
			[6, 7, 8], // bottom row
			[0, 3, 6], // left column
			[1, 4, 7], // middle column
			[2, 5, 8], // right column
			[0, 4, 8], // left diagonal
			[2, 4, 6], // right diagonal
		]

		for (let i = 0; i < winningCombination.length; i++) {
			const [a, b, c] = winningCombination[i]
			if (grid[a].value && grid[a].value === grid[b].value && grid[a].value === grid[c].value) {
				return grid[a].value
			}
		}
		// check for tie
		const isTie = grid.every((box) => box.value !== null)
		if (isTie) {
			return "tie"
		}

		return null
	}

	const resetGame = () => {
		setGrid(INITIAL_GRID)
		setLogs([])
		setWinner(null)
		setGameStarted(false)
	}

	const startGame = (e) => {
		e.preventDefault()
		setPlayerTurn(players[0].symbol)
		setGameStarted(true)
	}

	const handleSymbolChange = (e) => {
		if (e.target.name === "player1") {
			setPlayers([{ ...players[0], symbol: e.target.value }, players[1]])
		}
		if (e.target.name === "player2") {
			setPlayers([players[0], { ...players[1], symbol: e.target.value }])
		}
	}

	return (
		<>
			{!gameStarted && (
				<PreGame
					startGame={startGame}
					handleSymbolChange={handleSymbolChange}
					symbol1={symbol1}
					symbol2={symbol2}
				/>
			)}

			{gameStarted && (
				<>
					<Header onClick={resetGame} />
					<GameContainer
						grid={grid}
						handlePlayerClick={handlePlayerClick}
						winner={winner}
						resetGame={resetGame}
						playerTurn={playerTurn}
						players={players}
						editPlayer={editPlayer}
					/>
					<PlayerLogs logs={logs} />
				</>
			)}
		</>
	)
}

export default App

// TIC TAC TOE BOARD
// -  PLAYER EDITION
// - 9 squares

//  Plays log

//  Winning Modal
