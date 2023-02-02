
import React, { useEffect, useState } from "react";
//import "./styles/loader1.scss";

function Loader1() {
const [data, setData] = useState([]);
const [loading, setloading] = useState(undefined);
const [completed, setcompleted] = useState(undefined);

useEffect(() => {
  setTimeout(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setData(json);
        setloading(true);

        setTimeout(() => {
          setcompleted(true);
        }, 1000);
      });
  }, 2000);
}, []);

return (
  <>
    {!completed ? (
      <div className="loaderContainer">
        <div className="loader">
          {!loading ? (
            <div className="spinner">
              <span>Loading...</span>
              <div className="half-spinner"></div>
            </div>
          ) : (
            <div className="completed">&#x2713;</div>
          )}
        </div>
      </div>
    ) : (
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
    )}
  </>
);
}

export default Loader1;
/*
/*TYPE
blank
balls
bars
bubbles
cubes
cylon
spin
spinningBubbles
spokes
*/
