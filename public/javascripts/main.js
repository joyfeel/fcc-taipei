import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header/Header';

import 'font-awesome/css/font-awesome.min.css!';
//import "../stylesheets/style.css!";

class Main extends React.Component {
	constructor () {
		super();
	}
	render () {
		return (
			<div>
				<Header />
			</div>
		);
	}
}

ReactDOM.render (<Main />, document.getElementById('main'));