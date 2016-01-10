import React from 'react';
import ReactDOM from 'react-dom';
import cx from 'classnames';

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
	test(ulElement) {
		let innerChild = React.Children.map(ulElement.props.children, (child, index) => {
			return React.cloneElement(child, {
				className: cx(child.props.className, 'on h-expand')
			});
		});

		let newUlElement = React.cloneElement(ulElement, {
			children: innerChild
		});

		return newUlElement;
	}
	render () {
		let childrens = this.props.children,
			innerChild = React.Children.map(childrens, (child, index) => {
			if (index === 0) {
				return React.cloneElement(child, {
					onClick: this.toggleIsOpen
				});
			} else {
				return child;	
			}
		});

		return (
			<div className='fcc-popover'>
				{innerChild[0]}
				{innerChild[1]}
				{this.state.isShow ? this.test(innerChild[2]) : null}
			</div>
		);
	}
}

export default Popover;