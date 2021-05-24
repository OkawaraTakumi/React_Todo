import React from 'react'
import { useHistory } from 'react-router-dom';


const Nav = () => {
    const history = useHistory();
    const handleLink = path => history.push(path);
    
    return (
        <React.Fragment>
            <h1>ToDo一覧画面</h1>
            <button onClick={() => handleLink('/create')}>新規チケット作成</button>
        </React.Fragment>   
    )
}

export default Nav