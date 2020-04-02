import React from "react";
import {useFetchData} from "./customHooks"
import "./App.css";

// The parent component
function App() {
  const apiAddress = 'https://api.nasa.gov/planetary/apod?api_key=R9dCmyw3hwyS2n9ubgAbWnecZpFf6fUZEDkK8Zdm';
  const data = useFetchData(apiAddress);

  return (
    <div className="App">
      {data && <img src={data.url} alt={data.title} />}
    </div>
  );
}

export default App;