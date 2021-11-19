import React from "react";
import {Form, Button }from 'react-bootstrap'
import { addflight } from "../Utils/Functions";
import { useHistory } from 'react-router';

const AddFlight = () => {
    const history = useHistory()

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log(data.get('Airlines'))
        addflight({flightNumber: data.get('flightnumber'),operatingAirlines: data.get('Airlines'),departureCity: data.get('city'),dateOfDeparture: data.get('date') })
        history.push("/");
    }
  return (
    <div className='container col-8'>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>Flight Number</Form.Label>
          <Form.Control type="text" name='flightnumber'placeholder="Enter flight number" />
          <Form.Text className="text-muted">
            </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>Airlines</Form.Label>
          <Form.Control type="text" name='Airlines'placeholder="Enter Airleines" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>Deartur City</Form.Label>
          <Form.Control type="text" name='city'placeholder="Enter a City" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicDate">
          <Form.Label>Date of departur</Form.Label>
          <Form.Control type="date" name='date'/>
        </Form.Group>
       
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default AddFlight;
