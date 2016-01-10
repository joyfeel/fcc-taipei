import React from 'react';
import { Router } from 'react-router';

const InputEmail = () => <input type='text' name='account' placeholder='email' id='login-account' />
const InputPassword = () => <input type='password' name='password' placeholder='password' id='login-password' />

class Entry extends React.Component {
	constructor() {
		super();
		this.state = {
			email: '',
			password: ''
		};
	}
	handleSubmit() {
		console.log('RRRRRR');
		this.props.history.pushState(null, '/register');
	}
	render () {
		return (
			<div className='wrapper1'>
				<form onSubmit={this.handleSubmit.bind(this)}>
					<div className='login'>
						<input type='submit' value='Register' className='submit' />
						<a href='' className='github'>
							<i className='fa-github fa'></i>Github							
						</a>
					</div>
				</form>
			</div>
		);
	}	
}

Entry.PropTypes = {
	history: React.PropTypes.object.isRequired
};

export default Entry;