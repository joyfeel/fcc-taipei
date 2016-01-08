import React from 'react';

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
	render () {
		return (
			<div className='wrapper1'>
				<form action=''>
					<div className='login'>
						<InputEmail />
						<InputPassword />
						<input type='submit' value='send' className='submit' />
						<a href='' className='github'>
							<i className='fa-github fa'></i>Github							
						</a>
					</div>
				</form>
			</div>
		);
	}	
}

export default Entry;