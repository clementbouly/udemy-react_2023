import { Suspense, lazy, useState } from "react"
import SimpleInput from "./components/SimpleInput"

function App() {
	const [showComp1, setShowComp1] = useState(false)
	const [showComp2, setShowComp2] = useState(false)

	const toggleComp1 = () => {
		setShowComp1((prevState) => !prevState)
	}

	const toggleComp2 = () => {
		setShowComp2((prevState) => !prevState)
	}

	const getPageContent = () => {
    const LazyComp1 = lazy(() => import("./components/comp1"))
    const LazyComp2 = lazy(() => import("./components/comp2"))
		return (
			<Suspense fallback={"loading"}>
				{showComp1 && <LazyComp1 />}
				{showComp2 && <LazyComp2 />}
        {!showComp1 && !showComp2 && <h1>Nothing to see here</h1>}
			</Suspense>
		)
	}

	return (
		<div className={`app ${showComp1 ? "comp1" : ""} ${showComp2 ? "comp2" : ""}`}>
			<SimpleInput />
    
			<h1>Lazy Loading Practice</h1>
			<button className={`${showComp1 ? "off" : "on"}`} onClick={toggleComp1}>
				Show Comp1
			</button>
			<button className={`${showComp2 ? "off" : "on"}`} onClick={toggleComp2}>
				Show Comp2
			</button>

			{getPageContent()}
		</div>
	)
}

export default App
