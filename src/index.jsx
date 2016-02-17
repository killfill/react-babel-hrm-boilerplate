import React from 'react'
import ReactDOM from 'react-dom'


// const App = () => {
// 	return <div>_4444555</div>
// }

class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {num: 0}
	}

	componentDidMount() {
		this.interval = setInterval(() => {
			this.setState({num: this.state.num+1})
		}, 1000)
	}

	componentWillUnmount() {
		clearInterval(this.interval)
	}

	render() {
		return <h1>Sip {this.asstate.num + 100}</h1>
	}
}

ReactDOM.render(
	<App/>,
	document.getElementById('root')
)