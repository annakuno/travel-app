import React from 'react';

class Welcome extends React.Component {

  render() {
    return (
      <div className="welcome">
        <h1>Welcome to {this.props.location}!</h1>
      </div>
    )
  }

}

export default Welcome;
