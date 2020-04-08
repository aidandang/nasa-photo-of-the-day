import React from "react";
import {useFetchData} from "./customHooks";
import {
  LoadingDiv,
  WrapperDiv
} from "./customStyles";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainContainer from "./components/MainContainer";

// The App component
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
            <Header date={data.date} />
            <MainContainer title={data.title} explanation={data.explanation} />
            <Footer copyright={data.copyright} />
          </WrapperDiv>
      }
    </div>
  );
}

export default App;