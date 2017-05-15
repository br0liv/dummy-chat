import React, { Component } from 'react';
import ReactDOM from "react-dom";
import UserChatForm from './UserChatForm';

//Stores a list of chat users
export default function ConnectedUsers(props){
    return(
        <div className="connected-users">
            <ul>
                { props.users.map( (user, index) => <UserChatForm user={ user } key={ index } /> ) } 
            </ul>
        </div>
    )
}