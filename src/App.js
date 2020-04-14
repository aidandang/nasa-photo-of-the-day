import React from "react";
import { useFetchData } from "./helpers";
import './App.css';
import { StyledHeader } from "./styledComponents";

const secret = process.env.REACT_APP_APOD_API_KEY;

// The App component.
function App() {
  
  // Assign the API key to the url then call useFetchData function to get the data.
  const apiAddress = `https://api.nasa.gov/planetary/apod?api_key=${secret}`;
  const data = useFetchData(apiAddress);

  return (
    <>
      {!data 
        ? 
          <div className="loading">Loading...</div> 
        :
          <StyledHeader url={data.hdurl}>
            <nav>
              <div className="logo-container">
                <p>crest.studio</p>
              </div>
              <div className="nav-container">
                <a className="nav-a" href="https://https://api.nasa.gov/">Copyright: {!data.copyright ? 'NASA' : data.copyright}</a>
                <a className="nav-a" href="https://https://api.nasa.gov/">{data.date}</a>
              </div>
            </nav>
            <div className="content-container">
              <h1 className="title">{data.title}</h1>
              <p className="content">{data.explanation}</p>
            </div>
            <h3 className="apod-text">Astronomy Picture of the Day</h3>
          </StyledHeader>
      } 
    </>
  )
}

export default App;