import React, { Component } from 'react'
import '../styles/WalkMapContainer.css';
import { compose, withProps, lifecycle } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, DirectionsRenderer, Marker } from "react-google-maps"
const google = window.google
//withGoogleMap is a higher order component (HOC)

const WalkMapContainer = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyAgI-8-W-pU3AW5bBZp0gxO5vqMZMrYy_M&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div className="container-map" style={{ height: `400px`}} />,
    mapElement: <div style={{ height: `100%`}} />,
  }),
  withScriptjs,
  withGoogleMap,
  lifecycle({
    componentDidMount() {
// Directions Creation - Start, End, Waypoints
      const DirectionsService = new google.maps.DirectionsService();
      //const waypts = [{location: new google.maps.LatLng(43.647986, -79.389184), stopover:false}, {location: new google.maps.LatLng(43.647986, -79.669184), stopover:false}]; //CHANGE
      const waypts = []

      DirectionsService.route({
        origin: new google.maps.LatLng(this.props.theNewRoute[0].start.lat, this.props.theNewRoute[0].start.lng), //CHANGE
        destination: new google.maps.LatLng(this.props.theNewRoute[0].end.lat, this.props.theNewRoute[0].end.lng), //CHANGE
        waypoints: waypts,
        travelMode: google.maps.TravelMode.WALKING,
      }, (result, status) => {
        if (status === google.maps.DirectionsStatus.OK) {
          this.setState({
            directions: result,
          });
        } else {
          console.error(`error fetching directions ${result}`);
        }
      });
    }
  })
)(props =>
  <GoogleMap
    defaultZoom={7}
    defaultCenter={new google.maps.LatLng(43.644665, -79.394945)} //CHANGE
  >
    <Marker position={{ lat: 43.647986, lng: -79.389184 }}></Marker>
    <Marker position={{ lat: 43.647986, lng: -79.379837 }}></Marker>

    {console.log("PROPS--->", props)}
    {props.directions && <DirectionsRenderer directions={props.directions} options={{draggable:true}} />}
    {console.log("POST PROPS--->", props)}
    <button onClick={this.testButton}>HERE</button>
  </GoogleMap>
);

class MyMapContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }



  componentDidMount(){
    console.log("INNER CDM")
  }

  getMyDirections = evt => {
    console.log(evt)
  }

  handleMapClick = () => {
    console.log("this is the event")
  }

//SEND THE PROPS BELOW IN THE RETURN! RECALL FLOW
//Sends theNewRoute set of Start/End points to WalkMapContainer above

  render(){
    console.log("BEFORE the Render")
    return(
      <div>
        <WalkMapContainer theNewRoute={this.props.theRoute} />
        <button onClick={this.handleMapClick}>Save!!!</button>
      </div>
    )
  }
}

export default MyMapContainer;
