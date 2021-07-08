import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './App.css';
import React, { createContext } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NotFound from './components/NotFound/NotFound';
import Home from './components/Home/Home';
import { useState } from 'react';
export const UserContext=createContext()

function App() {
  const [logoData,setLogoData]=useState(1)
  return (
    <div className="App">
      <UserContext.Provider value={[logoData,setLogoData]}>
      <Router> 
        <Switch>
          <Route path="/">
            <Home></Home>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
      </UserContext.Provider>
     
    </div>
  );
}

export default App;
