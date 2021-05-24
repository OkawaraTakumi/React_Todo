import {CREATE} from '../actions'

const initialState = {ticketList:[]}

export default (state = initialState, action) => {
    switch(action.type){
        case CREATE :
            const newTicketList = [...state.ticketList, action.ticket];
            return {ticketList:newTicketList}
        default:
            return state
    }
    
}