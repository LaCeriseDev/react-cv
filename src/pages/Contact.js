import React from 'react'
import Navigation from '../components/Navigation'
import MapContainer from '../components/contact/MapContainer';
import FormContactMe from './../components/contact/FormContactMe.js';


const Contact = () => {
return(
  <div className="contact">
    <Navigation />
    <main className="surface contactContent">
      <FormContactMe />
      <div className="map">
        <MapContainer className="map"/>
      </div>
    </main>
  </div>
  )
}

export default Contact
