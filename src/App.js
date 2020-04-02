import React, {useState, useEffect} from "react";
import axios from 'axios';
import "./App.css";

function useFetchData(arg) {
  const [data, setData] = useState(null);
  
  useEffect(() => {
    axios.get(arg)
    .then(response => {
      // get the data
      setData(response.data);
    })
    .catch(err => {
      // deal with the error in here
      console.log("Error: CANNOT get the data!", err);
    })
  }, [arg])

  return data 
}

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
