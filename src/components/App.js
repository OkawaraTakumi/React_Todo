import '../App.css';
import React from "react";
import {BrowserRouter as Router,
        Switch,Route} from 'react-router-dom';
import Create from './create.js'
import Ticket from './ticket.js'
import Nav from './nav.js'




function App() {
  return (
    <Router>
      <Nav/>
      <Switch>
        <Route path='/create' exact component={Create} />
      </Switch>
      <Ticket/>
    </Router>
  );
}

export default App;
