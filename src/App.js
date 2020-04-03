import React from "react";
import {useFetchData} from "./customHooks"
import "./App.css";

// A child component to display the image
function DisplayImg({src, alt}) {
  return (
    <img src={src} alt={alt} />
  )
}

// The parent component
function App() {
  const apiAddress = 'https://api.nasa.gov/planetary/apod?api_key=R9dCmyw3hwyS2n9ubgAbWnecZpFf6fUZEDkK8Zdm&date=2017-07-09';
  const data = useFetchData(apiAddress);

  return (
    <div className="App">
      {!data ? <p>Loading...</p> : <DisplayImg src={data.hdurl} alt={data.title} />}
    </div>
  );
}

export default App;