import React from 'react';
import SearchLanding from './SearchLanding';

class Landing extends React.Component {

  render() {

    //var path = require('../../media/MountainTimelapse.mp4');
    var path = null;

    return (
      <div className="landing-background-vid">
        <video width="100%" height="100%" autoPlay loop>
          <source src={path} type="video/mp4" />
        </video>
        <div className="shade">
          <h1>Where are you wanderlusting?</h1>
          <SearchLanding />
          </div>
      </div>
    )
  }
}

export default Landing;
