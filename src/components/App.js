import '../App.css';
import React from "react";
import {BrowserRouter as Router,
        Switch,Route} from 'react-router-dom';
import Create from './create.js'
import Nav from './nav.js'
import TicketDetail from './ticketDetail';
import Ticket from './ticket.js'



function App() {
  return (
    <Router>
      <Nav/>
      <Switch>
        <Route path='/create' exact component={Create} />
        <Route path={`/ticketDetail/:taskIndex`} exact component={TicketDetail}/>
        <Route path='/' component={Ticket} />
      </Switch>
    </Router>
  );
}

export default App;
