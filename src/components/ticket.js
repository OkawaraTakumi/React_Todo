import React from "react";
import {BrowserRouter as Router,
    Switch,Route, useRouteMatch, Link} from 'react-router-dom';
import{ connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

const Ticket = (props) =>{
    const history = useHistory();
    const handleLink = path => history.push(path);
    const match = useRouteMatch();

    return (
        <React.Fragment>
            <h1>チケット一覧</h1>
            <Router>
                <ol>
                {props.ticketList.map((ticket,index) => {
                    return (<li key={index}><a onClick={()=>{handleLink(`/ticketDetail/${ticket.id}`)}} >{ticket.ticketName}&nbsp;{ticket.personName}</a></li>
                              )
                } )}
                </ol>
                <Switch>
                    
                </Switch>
            </Router>
            
        </React.Fragment>
        
    )
}

const mapStateToProps = state => ({
    ticketList:state.createTickets.ticketList
})

export default  connect(mapStateToProps)(Ticket)

// to={`/ticketDetail/${ticket.id}`}