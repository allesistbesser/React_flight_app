import React, { useContext, useEffect } from "react";
import { FlightContext } from "../context/FlightContext";
import Table from "react-bootstrap/Table";
import axios from "axios";

const Passengers = () => {
  const { Passenger, setPassenger } = useContext(FlightContext);

  useEffect(() => {
   axios
      .get("http://127.0.0.1:8000/api/passenger/", {
        headers: {
          'Authorization': 'Token 0baf4d3a05de69e8313862c97d79b1d1be41bfba'
        }
      })
      .then((res) => setPassenger(res.data)) // objenin içinde data'nın içinde olduğunundan res.data dedik. clg ile yazdırınca görünüyor. setItemList(res.data)

  }, []);
  
  return (
    <div className="container col-7">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>E-mail</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {Passenger.map((pas,index) => (
            <tr key={index}>
              <td>
                <a className="" href="">
                  {pas.firstName}{" "}
                </a>
              </td>
              <td>{pas.lastName}</td>
              <td>{pas.email}</td>
              <td>{pas.phone}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Passengers;
