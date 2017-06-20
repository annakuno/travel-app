import React from 'react';
import $ from 'jquery';

class LocationInfo extends React.Component {

    componentDidMount() {
      this.fetchPlaceID()
      //this.fetchRestaurants()
      this.fetchPlacesToEat()
    }

    fetchPlaceID = () => {
      fetch(`https://tranquil-mesa-55460.herokuapp.com/textsearch?query=${this.props.location}`)
        .then((res) => res.json())
        .then((data) => {
          var placeID = data.data.results[0].place_id;
          this.fetchPlaceInfo(placeID)
          console.log('data', data)
        })
    }

    fetchPlacesToEat = () => {
     fetch(`https://tranquil-mesa-55460.herokuapp.com/food?query=${this.props.location}`)
     .then((res) => res.json())
     .then((data) => {
       // var placeID = data.data.results[0].place_id;
       // this.fetchPlaceInfo(placeID)
       console.log('food', data)
     })
   }


    fetchPlaceInfo = (placeID) => {
      fetch(`https://tranquil-mesa-55460.herokuapp.com/details?placeid=${placeID}`)
      .then((res) => res.json())
      .then((data) => {
        console.log('data', data)
      })
    }

    render() {


      return (
        <div>Hello</div>
      )
    }
}

export default LocationInfo;
