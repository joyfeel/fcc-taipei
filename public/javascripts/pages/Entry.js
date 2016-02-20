import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';

import Typed from '../components/Typed';

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
	componentDidMount() {
		ReactDOM.render(<Typed />, document.getElementById('elementID'))
	}
	componentWillUnmount() {
		let isUnmount = ReactDOM.unmountComponentAtNode(document.getElementById('elementID'));
		
		if (isUnmount) {
			console.log('Successfully umount the node');
		}
	}
	render () {
		return (
			<div className='wrapper1' >
				<div className='test' id='elementID'>
				</div>
				<form>
					<div className='login'>						
						<Link to='/register' className='github'>
							<i className='fa-github fa'></i>Github
						</Link>
						<Link to='/testpage' className='thunder'>
							<i className='fa-bolt fa'></i>TEST2
						</Link>					
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