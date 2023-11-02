export function PlayerLogs({ logs }) {
	return (
		<ul id="log">
			{logs.map((log) => (
				<li key={log.id}>
					{log.player} played at {log.x}, {log.y}
				</li>
			))}
		</ul>
	)
}
