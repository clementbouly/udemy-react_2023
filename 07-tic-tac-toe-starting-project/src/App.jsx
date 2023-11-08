import { useState } from "react"
import { GameContainer } from "./components/gameContainer/gameContainer.component"
import { Header } from "./components/header/header.component"
import { PlayerLogs } from "./components/playersLog/playersLog.component"
import PreGame from "./components/preGame/preGame.component"

const DEFAULT_SYMBOLS = ["🏹", "🏀"]
// 🕸 ⭐️

function App() {
	const [gameStarted, setGameStarted] = useState(false)
	const [logs, setLogs] = useState([])
	const [symbols, setSymbols] = useState(DEFAULT_SYMBOLS)

	const resetGame = () => {
		setLogs([])
		setGameStarted(false)
	}

	const startGame = (e) => {
		e.preventDefault()
		setGameStarted(true)
	}

	const addLog = (log) => {
		setLogs([...logs, log])
	}

	const handleSymbolChange = (e) => {
		const newSymbols = [...symbols]
		newSymbols[e.target.name] = e.target.value

		setSymbols(newSymbols)
	}

	return (
		<>
			{!gameStarted && (
				<PreGame startGame={startGame} handleSymbolChange={handleSymbolChange} symbols={symbols} />
			)}

			{gameStarted && (
				<>
					<Header onClick={resetGame} />
					<GameContainer resetGame={resetGame} addLog={addLog} symbols={symbols} />
					<PlayerLogs logs={logs} />
				</>
			)}
		</>
	)
}

export default App
