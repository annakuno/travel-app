import React from 'react';
import StickySearch from './StickySearch';

class StickyNav extends React.Component {


  render() {
    return (
    <div className="nav">
      <div className="sticky-nav">
        <div className="sticky-nav-buttons">
          <a href="#"><div className="sticky-nav-item">
            <h2>Home</h2>
          </div></a>
          <a href="#"><div className="sticky-nav-item">
            <h2>Info</h2>
          </div></a>
          <a href="#"><div className="sticky-nav-item">
              <h2>Map</h2>
            </div></a>
          <a href="#"><div className="sticky-nav-item">
              <h2>Weather</h2>
            </div></a>
          <a href="#gallery"><div className="sticky-nav-item">
              <h2>Gallery</h2>
            </div></a>
        </div>
        <div className="sticky-nav-search">
          <StickySearch location={this.props.location}/>
        </div>
      </div>
    </div>
    )
  }

}

export default StickyNav;

// <ul>
//   <a href="#"><div className="sticky-nav-item"><li>Info</li></div></a>
//   <a href="#"><div className="sticky-nav-item"><li>Map</li></div></a>
//   <a href="#"><div className="sticky-nav-item"><li>Weather</li></div></a>
//   <a href="#"><div className="sticky-nav-item"><li>Gallery</li></div></a>
//   <a href="#"><div className="sticky-nav-item"><li id="search">?</li></div></a>
// </ul>
