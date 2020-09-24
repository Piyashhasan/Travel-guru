import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home/Home';
import {Route, Switch} from 'react-router-dom'
import Login from './Components/Login/Login';
import  Nav  from './Components/Nav/Nav';
import Shipment from './Components/Book/Shipment';

const App = () => {
  return (
    <div className="App">
      <Nav></Nav>
      <Route>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/shipment">
              <Shipment></Shipment>
            </Route>
          </Switch>
        </Route>
    </div>
  );
};
export default App;