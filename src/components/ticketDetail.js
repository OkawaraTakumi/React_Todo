import React from "react";
import {useParams} from 'react-router-dom';
import{ connect } from 'react-redux';
import { createTicket } from '../actions';
import { useHistory } from 'react-router-dom';

const TicketDetail = (props) => {
        const {taskIndex} = useParams();
        const history = useHistory();
        const handleLink = path => history.push(path);

        const detail = props.ticketList[taskIndex- 1]
        const detailName = detail ? detail.ticketName: ''
        const detailText = detail ? detail.ticketDetail: ''
        const detailPerson = detail ? detail.personName: '' 
        const detailDeadline = detail ? detail.deadline: ''
        const detailStart = detail ? detail.start: ''


            return (
                <React.Fragment>
                    <h2>チケット詳細表示</h2>
                    <ul>
                        <li>チケット名:&nbsp;{detailName}</li>
                        <li>詳細:&nbsp;{detailText}</li>
                        <li>担当者:&nbsp;{detailPerson}</li>
                        <li>期日:&nbsp;{detailDeadline}</li>
                        <li>開始日:&nbsp;{detailStart}</li>
                    </ul>
                    <button type="button" onClick={()=>{handleLink('/')}}>トップに戻る</button>
                </React.Fragment>
            )
}

const mapStateToProps = state => ({
    ticketList:state.createTickets.ticketList
})

const mapDispatchToProps = dispatch => ({
    createTicket:(ticket) => dispatch(createTicket(ticket))
})

export default connect(mapStateToProps, mapDispatchToProps)(TicketDetail)