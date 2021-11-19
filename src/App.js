import './App.css';
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { FlightContext } from './context/FlightContext'
import AppRouter from './router/AppRouter';


function App() {

  const [flightList, setflightList] = useState([]);
  const [Passenger, setPassenger] = useState([]);
  const [token , settoken] = useState();
  const [islogin , setislogin] = useState();



  useEffect(() => {
      axios
      .get("http://127.0.0.1:8000/api/flight/", {
        headers: {
          'Authorization': `Token ${token}`  
        }
      })
      .then((res) => setflightList(res.data)) // objenin içinde data'nın içinde olduğunundan res.data dedik. clg ile yazdırınca görünüyor. setItemList(res.data)

  },[token]);
  console.log(flightList)
  return (
    <div >
      <FlightContext.Provider value={{ flightList , Passenger, setPassenger, settoken, token, islogin , setislogin}}>

        <AppRouter />

      </FlightContext.Provider>
    </div>
  );
}

export default App;
