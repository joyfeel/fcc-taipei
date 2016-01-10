import React from 'react';
import Header from './Header/Header';

class Main extends React.Component {
	render () {
		return (
			<div>
				<Header />
				<div>
					{this.props.children}
				</div>
			</div>
		);
	}
}

export default Main;
