import React, { useContext } from 'react'
import { FlightContext } from '../context/FlightContext'
import {Table, Button} from 'react-bootstrap'
import { useHistory } from 'react-router'



const HomePage = () => {
    const history = useHistory()
    const { flightList, token } = useContext(FlightContext)
   
    return (
        
        <div className='container col-7'>
            { token ? 
            <Table striped bordered hover >

                <thead>
                    <tr>
                        <th>Flight Number</th>
                        <th>Airlines</th>
                        <th>Deartur City</th>
                        <th>Date of departur</th>
                    </tr>
                </thead>
                <tbody>
                    {flightList.map((flight) => (
                        <tr key={flight.flightNumber}>
                            <td ><a className='btn btn-primary'href="">{flight.flightNumber} </a></td>
                            <td>{flight.operatingAirlines}</td>
                            <td>{flight.departureCity}</td>
                            <td>{flight.dateOfDeparture}</td>
                        </tr>

                    ))}
                </tbody>

                <Button variant='danger'onClick={()=> history.push('/addflight')}> New Flight</Button>
            </Table>: <h1 container> Please Login </h1>}
            

        </div> 
    ) 
}

export default HomePage
