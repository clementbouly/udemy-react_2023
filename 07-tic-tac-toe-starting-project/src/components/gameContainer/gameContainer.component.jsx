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

export function GameContainer({ grid, handlePlayerClick, winner, resetGame, playerTurn, players, editPlayer }) {
	return (
		<div id="game-container" data-testId="game-container">
			<Players playerTurn={playerTurn} players={players} editPlayer={editPlayer} />
			<GameBoard grid={grid} handlePlayerClick={handlePlayerClick} />
			{winner && <GameOver winner={winner} resetGame={resetGame} />}
		</div>
	)
}
