import React from "react"

class Child extends React.Component {
	constructor(props) {
		super(props)
		this.state = { color: props.color }
	}

	componentDidUpdate(prevProps) {
		if (this.props.color !== prevProps.color) {
			this.setState({ color: this.props.color })
		}
	}

	render() {
		return <div style={{ color: this.state.color }}>Hello World</div>
	}
}

class Parent extends React.Component {
	constructor(props) {
		super(props)
		this.state = { color: "red" }
	}

	render() {
		return (
			<div>
				<Child color={this.state.color} />
				<button onClick={() => this.setState({ color: "green" })}>Change Color</button>
			</div>
		)
	}
}

export default Parent
