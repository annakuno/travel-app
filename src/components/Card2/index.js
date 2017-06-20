import React from 'react';
import PropTypes from 'prop-types'
import './index2.css'
import CardCollapsable2 from './CardCollapsable2'

class Card2 extends React.Component {

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
			<div className="card2" style={{
					height: this.state.containerHeight + 'px'
				}}>
				<div className="card-header"
					style={{
						height: this.state.headerHeight + 'px'
					}}
					onClick={this.handleExpansion}>
					<div className="card-header-content2">
						<div className="title"> Places to eat </div>
					</div>
				</div>
				<CardCollapsable2
					elements={this.props.elements}  />
			</div>
		)
	}
};

export default Card2;
