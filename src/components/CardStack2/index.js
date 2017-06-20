import React from 'react';
import PropTypes from 'prop-types'
import Card from '../Card'
import Card2 from '../Card2'
import './index.css'

class CardStack extends React.Component {

	render() {
		return (
			<div className="card-stack">
				<Card2 elements={this.props.elements}
					elementHeight={50}
					elementsCount={this.props.elementsCount} />
			</div>
		)
	}
};

export default CardStack;

// <Card elements={this.props.elements}
// 	elementHeight={50}
// 	elementsCount={this.props.elementsCount} />
