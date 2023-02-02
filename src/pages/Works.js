import React from 'react'
import Navigation from '../components/Navigation'

import Bid from '../components/works/Bid';
import Newest from '../components/works/Newest';
import ScrollsnapY from '../components/works/Scrollsnap-y';

const Works = () => {
return(
  <div className="works">
    <Navigation />
    <main className="worksContent">
      <Bid />
      <Newest />
      <ScrollsnapY />
    </main>
  </div>
  )
}
export default Works
