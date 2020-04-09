import React from "react";
import {useFetchData} from "./customHooks";
import {
  LoadingDiv,
  WrapperDiv
} from "./customStyles";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainContainer from "./components/MainContainer";

const secret = process.env.REACT_APP_APOD_API_KEY;
console.log(secret);

// The App component
function App() {
  const apiAddress = `https://api.nasa.gov/planetary/apod?api_key=${secret}`;
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