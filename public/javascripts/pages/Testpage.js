import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';

import Rebase from 're-base';

const base = Rebase.createClass('https://burning-inferno-9078.firebaseio.com/');

const InputEmail = () => <input type='text' name='account' placeholder='email' />

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
					<InputEmail />
				</div>
			</div>
		);
	}	
}

export default Testpage;