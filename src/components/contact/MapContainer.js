import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react'
import mapStyles from './styles/mapStyles'

/*
const mapStyles = {
  width: '100%',
  height: '100%'
};
*/

/*
export class MapContainer extends Component {
  render() {
    return (
      <div style={{
position: "relative",
width: "50%",
height: "1100px"}}
className="map">
      <Map
        google={this.props.google}
        zoom={7}
        style={mapStyles.styles}
        mapId={"64ed698c634904cd"}
        initialCenter={
          {
            lat: 46.250506658760195,
            lng: 1.730168515079065
          }
        }
      />
      </div>
    );
  }
}
*/

class MapContainer extends Component{

state = {myMarkers: [ {latitude: 43.3237658604134, longitude: 5.3813668247733135}] }

displayMarkers = () => {
  return this.state.myMarkers.map((mark, index) => {
    return <Marker id={index}  position={{
      lat: mark.latitude,
      lng: mark.longitude
    }}
    onClick={() => console.log("You clicked me!",{index})} />
  })
}

render() {
  return (
    <div style={{
      position: "relative",
      width: "1fr",
      height: "100vh"}}
    className="trc">
    <Map google={this.props.google}
      zoom={7}
      styles={mapStyles.styles}
      initialCenter={{ lat: 46.250506658760195, lng: 1.730168515079065}}
      disableDefaultUI= {true}>
      {this.displayMarkers()}
    </Map>
  </div>
);
}}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDZTpM_bilYxnfeP3kbl3UJvHt6DqzVWx4'
})(MapContainer);
