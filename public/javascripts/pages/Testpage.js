import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';
import Rebase from 're-base';

const base = Rebase.createClass('https://burning-inferno-9078.firebaseio.com/');

const InputTitle = () => <input type='text' placeholder='title' />
const InputContnet = () => <input type='text' placeholder='content' />

class Testpage extends React.Component {
	constructor() {
		super();
	}
	componentDidMount() {

	}
	componentWillUnmount() {

	}
	render () {
		return (
			<div className='wrapper1' >
				<div className='mytest'>
					<InputTitle />
				</div>
			</div>
		);
	}	
}

export default Testpage;