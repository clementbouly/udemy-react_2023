import { useState } from "react"

export function PlayerEdition({ name, playerTurn, symbol, editPlayer }) {
	const [isEditing, setIsEditing] = useState(false)
	const [playerName, setPlayerName] = useState(name)

	const toggleEdit = (e) => {
		e.preventDefault()
		setIsEditing(!isEditing)
		if (isEditing) {
			editPlayer(symbol, playerName)
		}
	}

	const handleNameChange = (e) => {
		setPlayerName(e.target.value)
	}

	return (
		<li className={`player ${playerTurn === symbol ? "active" : null}`}>
			<form onSubmit={toggleEdit}>
				{isEditing ? (
					<input type="text" value={playerName} onChange={handleNameChange} />
				) : (
					<div className="player-name" onDoubleClick={toggleEdit}>
						{name}
					</div>
				)}

				<div className="player-symbol">{symbol}</div>

				<button onClick={toggleEdit}>{isEditing ? "Save" : "Edit"}</button>
			</form>
		</li>
	)
}
