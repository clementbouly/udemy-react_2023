export function PlayerLogs({ logs }) {
	return (
		<ul id="log">
			{logs
				.sort(
					// sort by id (newest first)
					(a, b) => (a.id > b.id ? -1 : 1)
				)
				.map((log) => (
					<li key={log.id}>
						{log.player} played at {log.x}, {log.y}
					</li>
				))}
		</ul>
	)
}
