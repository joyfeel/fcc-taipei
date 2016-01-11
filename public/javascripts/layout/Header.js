import React from 'react';
import ReactDOM from 'react-dom';
import Popover from '../components/Popover.js';

import { Router, Link } from 'react-router';

const PATH = {
	logo: 'https://s3.amazonaws.com/freecodecamp/freecodecamp_logo.svg'
};

class Header extends React.Component {
	renderHeader () {
		return (
			<Popover>
				<i className='material-icons ts'>account_circle</i>
				<h2 className='fcc-username'>username</h2>
				<ul className='fcc-account-menu'>
					<li className='ts'>
						<i className='material-icons'>accessibility</i>
						log-in
					</li>
		        	<li className="ts">
	  					<i className="material-icons">accessibility</i>
	  					item-2
					</li>
					<li className="ts">
	  					<i className="material-icons">accessibility</i>
	  					itme-3
					</li>
				</ul>
	    	</Popover>
		);
	}
	render () {
		return (
			<header>
				<div className='fcc-panel cf'>
					<h1 className='fcc-logo'>
						<Link to='/'>
							<img src={PATH.logo} alt='Free Code Camp logo' />
          					Taipei
						</Link>
					</h1>
					{this.renderHeader()}
				</div>
			</header>
		);
	}	
}

export default Header;