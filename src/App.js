import React from "react";
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Header from './Header';
import Home from "./Home";
import Checkout from "./Checkout";
import Front from "./Front"
import Createproduct from "./Createproduct";



function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/Login">
            <h1>Login page</h1>
          </Route>
          <Route exact path="/">
          
            <Front />
              
            {/* <Home/>  */}
          </Route>

          <Route path="/Home">
          <Header/>
            
            <Home />
            
          </Route>

          <Route path="/Createproduct">
          
            
            <Createproduct/>
            
          </Route>
          <Route path="/Checkout">
            <h1>Login page</h1>
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
