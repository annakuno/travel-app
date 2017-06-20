import React, { PropTypes } from 'react'

const CardCollapsable = (props) => {
  return (
    <div className="card-collsable">
      {props.elements.map((el) => {
        return (
          <div className="card-list__item">
            <div className="card-list-content">
              {el.name}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default CardCollapsable
