import gameLogo from "/game-logo.png"

export function Header({ onClick }) {
	return (
		<header>
			<img onClick={onClick} src={gameLogo} alt="game logo" />
			<h1>Tic Tac Toe</h1>
		</header>
	)
}
