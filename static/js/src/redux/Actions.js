import * as types from  './Types';

//Add a new user to the chat list
export function addUserToChat(user) {
  return {
    type: types.ADD_USER_TO_CHAT,
    username: user.username,
    avatar: user.avatar
  };
}

//Send message to chat
export function sendMessageToChat(message) {
  return {
    type: types.SEND_MESSAGE_TO_CHAT,
    message: message
  };
}

//New message from server
export function incomingMessageFromChat(messageData) {
  return {
    type: types.NEW_MESSAGE_FROM_CHAT,
    message: messageData
  };
}