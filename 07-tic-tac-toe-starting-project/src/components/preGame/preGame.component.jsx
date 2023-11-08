// PreGame.jsx
import React from "react"

const PreGame = ({ startGame, handleSymbolChange, symbols }) => {
	let symbol1, symbol2

	if (symbols) {
		;[symbol1, symbol2] = symbols
	}

	return (
		<div id="pre-game">
			<h1>Do you want to play tic tac toe ?</h1>

			<form onSubmit={startGame}>
				<button>Start Game</button>
				<div className="symbol-edit">
					<input name="0" type="text" value={symbol1} onChange={handleSymbolChange} /> VS
					<input name="1" type="text" value={symbol2} onChange={handleSymbolChange} />
				</div>
			</form>
		</div>
	)
}

export default PreGame
