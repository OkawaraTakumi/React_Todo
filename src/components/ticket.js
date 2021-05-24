import React from "react";
import {BrowserRouter as Router,
    Switch,Route, useRouteMatch, Link} from 'react-router-dom';
import TicketDetail from './ticketDetail';
import{ connect } from 'react-redux';

const Ticket = (props) =>{

    const match = useRouteMatch();

    return (
        <React.Fragment>
            <h1>チケット一覧</h1>
            <Router>
                <ol>
                {props.ticketList.map((ticket,index) => {
                    return (<Link  to={`/ticketDetail/${ticket.id}`}  key={index}><li>{ticket.ticketName}&nbsp;{ticket.personName}</li></Link>)
                } )}
                </ol>
                <Switch>
                    <Route path={`/ticketDetail/:taskIndex`} exact component={TicketDetail}/>
                </Switch>
            </Router>
            
        </React.Fragment>
        
    )
}

const mapStateToProps = state => ({
    ticketList:state.createTickets.ticketList
})

export default  connect(mapStateToProps)(Ticket)

