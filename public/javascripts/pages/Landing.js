import React from 'react';
import Header from '../layout/Header';

class Main extends React.Component {
	render () {
		return (
			<div>
				<Header />
				{this.props.children}
			</div>
		);
	}
}

export default Main;
