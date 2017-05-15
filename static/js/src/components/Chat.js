import React, { Component } from 'react';
import ReactDOM from "react-dom";
import ChatMessage from './ChatMessage';

//Container for ChatMessages
export default function Chat(props){
    return(
        <section className="main-chat">
            <ul>
                { props.messages.map( (message, index) => <ChatMessage message={ message } key={ index } /> ) } 
            </ul>
        </section>
    )
}