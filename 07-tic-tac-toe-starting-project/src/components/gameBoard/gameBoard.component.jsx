export function GameBoard({ grid, handlePlayerClick }) {
	return (
		<div id="game-board">
			<ol>
				{grid.map((box) => {
					return (
						<button
							data-x={box.x}
							data-y={box.y}
							key={`${box.x}-${box.y}`}
							onClick={handlePlayerClick}
							disabled={box.value !== null}
						>
							{box.value}
						</button>
					)
				})}
			</ol>
		</div>
	)
}
