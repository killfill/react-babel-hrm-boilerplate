import React from 'react'
import ReactDOM from 'react-dom'


const Sub = (props) => {
	return <h4>---------------- {props.texto}</h4>
} 

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
		return <div>
			<h1>Cachate</h1>
			<Sub texto={this.state.num}/>
			<b>If your trying to use redux store, there is a trick to be able to hotload its reducers, like <a href='https://github.com/reactjs/redux/blob/master/examples/todomvc/store/configureStore.js'>this</a></b>
			<pre>
				  if (module.hot)
				    module.hot.accept('./modules/reducer', () => 
				      store.replaceReducer(require('./modules/reducer'));
				    );
				  
			</pre>

		</div>
		// return <h1>Sip {this.state.num + 100}</h1>
	}
}

ReactDOM.render(
	<App/>,
	document.getElementById('root')
)



