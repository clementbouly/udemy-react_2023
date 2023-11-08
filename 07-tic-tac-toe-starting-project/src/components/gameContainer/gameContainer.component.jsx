import { useState } from "react"
import { GameBoard } from "../gameBoard/gameBoard.component"
import { Players } from "../players/players.component"

const GameOver = ({ winner, resetGame }) => {
	let endGameMessage = `${winner} won the game !`
	if (winner === "tie") {
		endGameMessage = "It's a tie !"
	}
	return (
		<div id="game-over">
			<h2>Game Over</h2>
			<p>{endGameMessage}</p>
			<button onClick={resetGame}>Play Again</button>
		</div>
	)
}

export function GameContainer({ resetGame, addLog, symbols }) {
	const [playerTurn, setPlayerTurn] = useState(symbols[0])
	const [winner, setWinner] = useState(null)

	const [players, setPlayers] = useState([
		{ name: "Max", symbol: symbols[0] },
		{ name: "Léon", symbol: symbols[1] },
	])


	const editPlayer = (symbol, newName) => {
		const newPlayers = players.map((player) => {
			if (player.symbol === symbol) {
				return { ...player, name: newName }
			}
			return player
		})
		setPlayers(newPlayers)
	}

	return (
		<div id="game-container" data-testid="game-container">
			<Players playerTurn={playerTurn} players={players} editPlayer={editPlayer} />
			<GameBoard
				playerTurn={playerTurn}
				setPlayerTurn={setPlayerTurn}
				players={players}
				setWinner={setWinner}
				addLog={addLog}
			/>
			{winner && <GameOver winner={winner} resetGame={resetGame} />}
		</div>
	)
}
