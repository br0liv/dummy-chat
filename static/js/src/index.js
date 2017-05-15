import React from 'react';
import ReactDOM from 'react-dom';
import ChatApp from './components/ChatApp';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import chatApp from './redux/Reducers';
import {socket,socketMiddleWare} from './middleware/SocketMiddleware';
import * as actions from './redux/Actions';

//Creates the store
var store = createStore(chatApp,applyMiddleware(socketMiddleWare));

//Register socket event listeners
// dispatches an action directly from the store
socket.on('NEW_MESSAGE_FROM_CHAT',function(message){
    store.dispatch( actions.incomingMessageFromChat(message) )
});

socket.on('disconnect',function(){
    console.log('Client lost connection to the server');
    let message = {
        from : 'Client app',
        avatar : 0,
        content : 'Client lost connection to the server. Trying to reconnect...',
        messageType : 'error'
    }
    store.dispatch( actions.incomingMessageFromChat(message) )
});

socket.on('reconnect',function(){
    console.log('Client lost connection to the server');
    let message = {
        from : 'Client app',
        avatar : 0,
        content : 'Connection to the server restored ',
        messageType : 'info'
    }
    store.dispatch( actions.incomingMessageFromChat(message) )
});

//Render the app
ReactDOM.render(
    <Provider store={store}>    
        <ChatApp />
    </Provider>,
  document.getElementById('root')
);