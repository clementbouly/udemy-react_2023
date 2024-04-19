import React, { useState } from "react"

function Child({ color }) {
	// Since this component only displays the color passed via props,
	// there's no need for a state or effect hooks here.
	return <div style={{ color: color }}>Hello World</div>
}

export function Parent2() {
	const [color, setColor] = useState("red")

	return (
		<div>
			<Child color={color} />
			<button onClick={() => setColor("green")}>Change Color</button>
		</div>
	)
}
