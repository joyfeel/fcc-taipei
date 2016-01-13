import React from 'react';

import $ from 'jquery';
import typed from 'typed.js';

class Typed extends React.Component {
	constructor () {
		super();
	}
	componentDidMount() {
		$(this.refs.element2).typed({
        	strings: ["First sentence.", "Second sentence."],
        	typeSpeed: 0
      	});	
	}
	componentWillUnmount(){
		clearInterval($(this.refs.element2).data("typed").timeout);
		$(this.refs.element2).removeData('typed');
	}
	render () {
		return (
			<div ref='element2'></div>
		);
	}
}

export default Typed;