import { PlayerEdition } from "./playerEdition.component"

export function Players({ playerTurn, players, editPlayer }) {
	return (
		<ul id="players" className="highlight-player">
			{players.map((player) => (
				<PlayerEdition
					key={player.symbol}
					name={player.name}
					symbol={player.symbol}
					playerTurn={playerTurn}
					editPlayer={editPlayer}
				/>
			))}
		</ul>
	)
}
