import React, { useContext } from "react";
import { FlightContext } from "../context/FlightContext";
import { BrowserRouter as Router } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import NavbarHeader from "../pages/NavbarHeader";
import AddFlight from "../pages/AddFlight";
import Passengers from "../pages/Passengers";
import login from '../pages/login'

const AppRouter = () => {
  return (
    <div>
      <Router>
        <NavbarHeader />

        <Switch>
        <Route path="/passenger" component={Passengers} />
        <Route exact path="/" component={HomePage} />
        <Route exact path="/login" component={login} />
        <Route exact path="/addflight" component={AddFlight} />
          
        </Switch>
        
      </Router>
    </div>
  );
};

export default AppRouter;
