import React from 'react';
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";

class Map extends React.Component {

  state = {

  }

  componentDidMount() {
    this.fetchCoordinates();
  }

  fetchCoordinates = () => {

    fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${this.props.location}&key=AIzaSyARTr-Vc9311XXIL2eZ5qq2OGZ7d72uZGE`)
    .then((res)=>{
      return res.json();
    })
    .then((data)=>{
      console.log(data);
      var coordinates = data.results[0].geometry.location;
      //console.log(coordinates);
      this.setState({coordinates})
    })
  }

render(){

  if(this.state.coordinates === null){
    return <div>Loading...</div>
  }
  else {
    const MyMap = withGoogleMap(props => (
      <GoogleMap
        ref={props.onMapLoad}
        defaultZoom={9}
        defaultCenter={{ lat: this.state.coordinates.lat, lng: this.state.coordinates.lng }}
        onClick={props.onMapClick}
      />
    ));

    return (
      <div className="map">
        {this.state.coordinates === null ? <h1>Loading...</h1> :
          <MyMap
          containerElement={
            <div style={{ height: `100%`, width: '100%' }} />
          }
          mapElement={
            <div style={{ height: `100%`, width: '100%' }} />
          }
          />}
      </div>
    )
  }
}
}

export default Map;
