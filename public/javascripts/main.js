import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header/Header';
import Entry from './components/Entry/Entry';

//import 'font-awesome/css/font-awesome.min.css!';

class Main extends React.Component {
	constructor () {
		super();
	}
	render () {
		return (
			<div>
				<Header />
				<Entry />
			</div>
		);
	}
}

ReactDOM.render (<Main />, document.getElementById('main'));