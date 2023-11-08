import { useState } from "react";

export function PlayerEdition({ name: initialName = "", playerTurn, symbol, editPlayer }) {
	const [isEditing, setIsEditing] = useState(false)
	const [playerName, setPlayerName] = useState(initialName)

	const handleSubmit = (e) => {
		e.preventDefault()
		toggleEdit()
		if (isEditing) {
			editPlayer(symbol, playerName)
		}
	}

	const toggleEdit = () => {
		setIsEditing((v) => !v)
	}

	const handleNameChange = (e) => {
		setPlayerName(e.target.value)
	}

	let playerNameSection = <input type="text" value={playerName} onChange={handleNameChange} required />

	if (!isEditing) {
		playerNameSection = (
			<div className="player-name" onDoubleClick={toggleEdit}>
				{playerName}
			</div>
		)
	}

	return (
		<li className={`player ${playerTurn === symbol ? "active" : null}`}>
			<form onSubmit={handleSubmit}>
				{playerNameSection}

				<div className="player-symbol">{symbol}</div>

				<button>{isEditing ? "Save" : "Edit"}</button>
			</form>
		</li>
	)
}
