import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "../screens/LoginScreen/LoginScreen";
import Signup from "../screens/SignupScreen/SignupScreen";
import Home from '../screens/HomeScreen/HomeScreen';
import Edit from '../screens/EditScreen/EditScreen';
import Blog from '../screens/BlogScreen/BlogScreen';
import Landing from '../screens/LandingScreen/LandingScreen'

const Routes = () => {
    return (
      <Router>
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route path="/login" component={Login} />
              <Route path="/signup" component={Signup} />
              <Route path="/home" component={Home} />
              <Route path="/edit/:blogID" component={Edit} />
              <Route path="/blog/:blogID" component={Blog}/>
            </Switch>
      </Router>
    );
  };
  
  export default Routes;