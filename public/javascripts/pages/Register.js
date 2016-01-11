import React from 'react';

const InputNickName = () => <input type='text' name='name' placeholder='nickname' id='login-account' />
const InputPassword = () => <input type='password' name='password' placeholder='password' id='login-password' />

class Register extends React.Component {
	constructor() {
		super();
		console.log('QQQQQ');
	}
	render () {
		return (
			<div className='wrapper1'>
				<form>
					<div className='login'>
						<InputNickName />
						<InputPassword />
					</div>
				</form>
			</div>
		);
	}	
}

export default Register;