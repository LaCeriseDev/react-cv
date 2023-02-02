import React from 'react'
//import Loader1 from './components/tools/Loader';

import {BrowserRouter, Route, Switch} from 'react-router-dom'
//import "./styles/loader1.scss";

import Home from './pages/Home'

import Contact from './pages/Contact'
import Skills from './pages/Skills'
import Works from './pages/Works'

import NotFound from './pages/NotFound'

const App = () => {
  return(
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />

          <Route path="/Contact" component={Contact} />
          <Route path="/Skills" component={Skills} />
          <Route path="/Works" component={Works} />

          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </>
    )
}
export default App
