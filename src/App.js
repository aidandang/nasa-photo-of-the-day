import React from "react";
import {useFetchData} from "./customHooks";
import {WrapperDiv, StyleH1} from "./customStyles";

// The parent component
function App() {
  const apiAddress = 'https://api.nasa.gov/planetary/apod?api_key=R9dCmyw3hwyS2n9ubgAbWnecZpFf6fUZEDkK8Zdm';
  const data = useFetchData(apiAddress);

  return (
    <div className='App'>
      {!data 
        ? 
          <p>Loading...</p> 
        : 
          <WrapperDiv type={`${data.url}`}>
            <StyleH1>Astronomy Picture of the Day by NASA</StyleH1>
          </WrapperDiv>
      }
    </div>
  );
}

export default App;