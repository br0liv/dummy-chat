import socketIO from 'socket.io-client';

//Custom Socket.io middleware for Redux

export const socket = socketIO.connect('http://localhost:4000', { timeout : 5000});

socket.on('connect', () => console.log('Client connected to chat server') );
socket.on('reconnecting', () => console.log('Client is trying to reconnect to the server') );

export const socketMiddleWare = store => next => action => {
    socket.emit(action.type, action );    
    next(action);
}