import React from 'react';

class StickySearch extends React.Component {

  _handleKeyPress = (e) => {
    if(e.charCode == 13)  {
        var location = this.refs.userLocation.value;
        alert(location);
    }
  }

  render() {
    return (
      <div id="search">
        <input onKeyPress={this._handleKeyPress} ref="userLocation" className="search-input" type="text" placeholder={this.props.location} /><i className="fa fa-search fa-2x" aria-hidden="true"></i>
      </div>
    )
  }
}

export default StickySearch;
