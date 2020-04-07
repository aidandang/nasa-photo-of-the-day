import React from "react";
import {useFetchData} from "./customHooks";
import {WrapperDiv, StyleH1, LoadingDiv, StylePara} from "./customStyles";

// The parent component
function App() {
  const apiAddress = 'https://api.nasa.gov/planetary/apod?api_key=R9dCmyw3hwyS2n9ubgAbWnecZpFf6fUZEDkK8Zdm';
  const data = useFetchData(apiAddress);

  return (
    <div className='App'>
      {!data 
        ? 
          <LoadingDiv>Loading...</LoadingDiv>
        : 
          <WrapperDiv type={`${data.hdurl}`}>
            <StyleH1>Astronomy Picture of the Day by NASA</StyleH1>
            <StylePara>{data.explanation}</StylePara>
          </WrapperDiv>
      }
    </div>
  );
}

export default App;