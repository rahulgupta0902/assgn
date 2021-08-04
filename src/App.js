
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ResultListing from "./containers/ResultListing";
import React from 'react';

import "./App.css";


function App() {
 

  return (
    <div className="App">
      <Router>
 
        <Switch>
          <Route path="/" exact component={ResultListing} />         
          <Route>404 Not Found!</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;