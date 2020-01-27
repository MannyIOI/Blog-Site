import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "../screens/LoginScreen/LoginScreen";
import Signup from "../screens/SignupScreen/SignupScreen";
import Home from '../screens/HomeScreen/HomeScreen';
import Create from '../screens/CreateScreen/CreateScreen';


const Routes = () => {
    return (
      <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/login" component={Login} />
              <Route path="/signup" component={Signup} />
              <Route path="/home" component={Home} />
              <Route path="/create" component={Create} />
            </Switch>
      </Router>
    );
  };
  
  export default Routes;