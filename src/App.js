import React, { createContext } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home/Home'
import Login from './Components/Pages/Login/Login/Login';
import ServiceList from './Components/Pages/Customer/ServiceList/ServiceList';
import Review from './Components/Pages/Customer/Review/Review';
import AdminServiceList from './Components/Pages/Admin/AdminServiceList/AdminServiceList';
import Admin from './Components/Pages/Admin/Admin/Admin';
import MakeAdmin from './Components/Pages/Admin/MakeAdmin/MakeAdmin';
import Order from './Components/Pages/Customer/Order/Order';
import { useState } from 'react';

export const userContext = createContext();


function App() {
  const [loggedInUser, loggedOutUser] = useState([]);

  return (
    <userContext.Provider value={[loggedInUser, loggedOutUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/order">
            <Order />
          </Route>
          <Route path="/review">
            <Review />
          </Route>
          <Route path="/serviceList">
            <ServiceList />
          </Route>
          <Route path="/review">
            <Review />
          </Route>
          <Route path="/adminServiceList">
            <AdminServiceList />
          </Route>
          <Route path="/addService">
            <Admin />
          </Route>
          <Route path="/makeAdmin">
            <MakeAdmin />
          </Route>
        </Switch>
      </Router>
    </userContext.Provider >
  );
}

export default App;
