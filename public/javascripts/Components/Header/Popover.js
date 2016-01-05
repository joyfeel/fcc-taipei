import React from 'react';
import ReactDOM from 'react-dom';

class Popover extends React.Component {
	constructor () {
		super();
		this.state = {
			isShow: false
		};
		this.toggleIsOpen = this.toggleIsOpen.bind(this);
		this.onClickOutside = this.onClickOutside.bind(this);
	}
	componentDidMount () {
		document.addEventListener('mousedown', this.onClickOutside);
	}
	componentWillUnmount () {
		document.removeEventListener('mousedown', this.onClickOutside);
	}
	onClickOutside (e) {
		if (!this.state.isShow) {
			return;
		}

		e.stopPropagation();

		let localNode = ReactDOM.findDOMNode(this),
			source = e.target;

		if (!localNode.contains(source)) {
			this.setState({
				isShow: false
			});
		}
	}
	toggleIsOpen () {
		this.setState({
			isShow: !this.state.isShow
		});
	}
	render () {
		return (
			<div onClick={this.toggleIsOpen}>
					{this.props.children[0]}
					{this.state.isShow ? this.props.children[1] : null}
			</div>
		);
	}
}

export default Popover;