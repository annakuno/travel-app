import React from 'react';
import Photo from './Photo';
import Unsplash from 'unsplash-js';
import SearchLocationPage from './SearchLocationPage';
import Welcome from './Welcome';
import Weather from './Weather';
var Carousel = require('nuka-carousel');
import Map from './Map';
//import $ from 'jquery';
 import LocationInfo from './LocationInfo.jsx';
// import Yelp from './Yelp';
import StickyNav from './StickyNav';
import BackToTopButton from './BackToTopButton';
import CardStack from './CardStack'
import CardStack2 from './CardStack2'

const unsplash = new Unsplash({
  applicationId: "11e1462b850f15f3bd6229d5e31decf03120ea80ee517833372205f6f97c89d5",
  secret: "58af4509c85539737207f84b3dbd6308839ea9e46ed93c4fb8f197ac1cfba911",
  callbackUrl: "urn:ietf:wg:oauth:2.0:oob"
});

class LocationPage extends React.Component {

  state = {
    q: [],
    photoSet1: [],
    photoSet2: [],
    elements: [
      {
        name: 'Thing to do number 1'
      },
      {
        name: 'Thing to do number 2'
      },
      {
        name: 'Thing to do number 3'
      },
      {
        name: 'Thing to do number 4'
      },
      {
        name: 'Thing to do number 5'
      },
      {
        name: 'Thing to do number 6'
      },
    ],
    elements2: [
      {
        name: 'Place to eat number 1'
      },
      {
        name: 'Place to eat number 2'
      },
      {
        name: 'Place to eat number 3'
      },
      {
        name: 'Place to eat number 4'
      },
      {
        name: 'Place to eat number 5'
      },
      {
        name: 'Place to eat number 6'
      },
    ]
  }

  componentDidMount() {
    this.setState({
      q: JSON.parse(this.props.location.query.q)
    }, () => {
      this.fetchPhotos(this.state.q.locationPassName)
      // this.fetchData(this.state.q.locationPassName)
    })
  }

  fetchPhotos = (locationName) => {
      unsplash.photos.searchPhotos(locationName, [], 1, 20)
      .then((res)=>{
        return res.json();
      })
      .then((photos) => {
        this.setState({
          photoSet1: photos.slice(0,10),
          photoSet2: photos.slice(10,20)
        })
      });
  }

  // fetchData = (locationName) => {
  //
  //   $.ajax({
  //       url: `https://maps.googleapis.com/maps/api/place/textsearch/json?query=Austin&key=AIzaSyARTr-Vc9311XXIL2eZ5qq2OGZ7d72uZGE`,
  //       jsonp: "callback",
  //       dataType: "jsonp",
  //       success: (photo) => {
  //           console.log(photo);
  //       }
  //     });
  //   }

  render() {

    return (
      <div className="location-page">

        <main className="location-content">

          <Carousel slidesToShow={1} width="100%" cellAlign="center" dragging={true} speed={600} autoplay={true} wrapAround={true}>
            {this.state.photoSet1.map((photo, index) => {
              return <Photo key={index} url={photo.urls.full}/>
            })}
          </Carousel>

          <div className="location-header">
            {this.state.q.length < 2 ? <h1>Loading...</h1> : <SearchLocationPage location={this.state.q.locationDisplayName}/>}
          </div>

          {this.state.q.length < 2 ? <h1>Loading...</h1> : <StickyNav location={this.state.q.locationDisplayName}/>}

          <div className="row1">
              {this.state.q.length < 2 ? <h1>Loading...</h1> : <Welcome location={this.state.q.locationPassName}/>}
              {this.state.q.length < 2 ? <h1>Loading...</h1> : <Map location={this.state.q.locationPassName}/>}
          </div>

          <div>
            <div>
              <CardStack
                elements={this.state.elements}
                elementHeight={50}
                elementsCount={this.state.elements.length}
                />
              </div>
              <div>
              <CardStack2
                elements={this.state.elements2}
                elementHeight={50}
                elementsCount={this.state.elements2.length}
                />
              </div>
          </div>

          {this.state.q.length < 2 ? <h1>Loading...</h1> : <Weather location={this.state.q.locationPassName}/>}

          <div id="gallery">
            <Carousel slidesToShow={1} width="100%" cellAlign="center" dragging={true} speed={600} wrapAround={true}>
              {this.state.photoSet2.map((photo, index) => {
                return <Photo key={index} url={photo.urls.full} />
              })}
            </Carousel>
          </div>





        </main>

        {this.state.q.length < 2 ? <h1>Loading...</h1> : <LocationInfo location={this.state.q.locationPassName} />}

      </div>
    )
  }


}

export default LocationPage;

//<Map location={this.state.q.locationPassName}/>
