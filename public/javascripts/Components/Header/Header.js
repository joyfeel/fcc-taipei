import React from 'react';
import ReactDOM from 'react-dom';
import Popover from './Popover.js';

const PATH = {
	logo: 'https://s3.amazonaws.com/freecodecamp/freecodecamp_logo.svg'
};

class Header extends React.Component {
	renderHeaderUser () {
		return (
			<Popover>
				<div>
					<i className='material-icons ts'>account_circle</i>
					<h2 className='fcc-username'>username</h2>
				</div>
				<div>
					<ul>
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
			    </div>
		    </Popover>
		);
	}
	render () {
		return (
			<header>
				<div className='fcc-panel cf'>
					<h1 className='fcc-logo'>
						<a href=''>
							<img src={PATH.logo} alt='Free Code Camp logo' />
          					Taipei
						</a>
					</h1>
					<div>
						{this.renderHeaderUser()}
					</div>
				</div>
			</header>
		);
	}	
}

export default Header;