import React from 'react';
import PropTypes from 'prop-types'
import './index.css'
import CardCollapsable from './CardCollapsable'

class Card extends React.Component {

	static propTypes = {
		containerHeight: PropTypes.number
	}

	state = {
		containerHeight: 84,
		isExpanded: false,
		headerHeight: 84
	}

	handleExpansion = () => {
		if(!this.state.isExpanded) {
			const elementsCount = this.props.elementsCount + 1
			const containerHeight = (this.props.elementHeight * elementsCount) + this.state.headerHeight;
			console.log(containerHeight)
			this.setState({
				containerHeight: containerHeight,
				isExpanded: true
			})
		} else {
			this.setState({
				containerHeight: 84,
				isExpanded: false
			})
		}
	}

	render() {
		return (
			<div className="card" style={{
					height: this.state.containerHeight + 'px'
				}}>
				<div className="card-header"
					style={{
						height: this.state.headerHeight + 'px'
					}}
					onClick={this.handleExpansion}>
					<div className="card-header-content">
						<div className="title"> Things to do </div>
					</div>
				</div>
				<CardCollapsable
					elements={this.props.elements}  />
			</div>
		)
	}
};

export default Card;
