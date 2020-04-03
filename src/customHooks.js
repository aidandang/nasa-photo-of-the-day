import { useState, useEffect } from 'react';
import axios from 'axios';

export function useFetchData(arg) {
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

// export function useFetchData(arg) {
//   const [fetchData, setData] = useState(null);

//   useEffect(() => {
//     fetch(arg)
//       // We get the API response and receive data in JSON format...
//       .then(response => response.json())
//       // ...then we update the users state
//       .then(data =>
//         setData(data)
//       )
//       // Catch any errors we hit and update the app
//       .catch(err => setData(err));
//   }, [arg])

//   return fetchData
// }