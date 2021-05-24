import React from "react";
import{ connect } from 'react-redux';
import { createTicket } from '../actions';
import { useHistory } from 'react-router-dom';

const Create = (props) => {

    const history = useHistory();
    const handleLink = path => history.push(path);

    const getTicket = (e) => {
       let listElements = Array.from(e.target.previousElementSibling.getElementsByTagName('li'));
       const valueList = {};
       listElements.forEach((item) => {
        const element = item.lastChild;
        valueList[element.name] = element.value;
       })
       valueList.id = props.ticketList.length + 1;
       props.createTicket(valueList)
       handleLink('/');
    }


    return (
        <React.Fragment>
            <h1>チケット作成</h1>
            <ul>
                <li>チケット名<input name="ticketName" type="text" placeholder='チケット名を入力してください' /></li>
                <li>詳細<textarea name="ticketDetail" cols="30" rows="10"></textarea></li>
                <li>担当者<input name="personName" type="text" placeholder='担当者名を入力してください' /></li>
                <li>期日<input name="deadLine" type="text" placeholder='期日を入力してください' /></li>
                <li>開始日<input name="start" type="text"  placeholder='開始日を入力してください' /></li>
            </ul>
            <button onClick={(e)=>{getTicket(e)}}>チケットを作成</button>
        </React.Fragment>
    )
}

const mapStateToProps = state => ({
    ticketList:state.createTickets.ticketList
})

const mapDispatchToProps = dispatch => ({
    createTicket:(ticket) => dispatch(createTicket(ticket))
})

export default connect(mapStateToProps, mapDispatchToProps)(Create)