import * as types from  '../js/src/redux/Types';
import * as actions from  '../js/src/redux/Actions';


describe('actions', () => {
  it('Add a new user to the list', () => {
    const user = {
        username: "Bob",
        avatar: 2
    }
    const expectedAction = {
        type: types.ADD_USER_TO_CHAT,
        username: user.username,
        avatar: user.avatar
    };
    
    expect(actions.addUserToChat(user)).toEqual(expectedAction)
  })

  it('Send a chat message', () => {
    const message = {
          from : 'Bob',
          avatar : 0,
          content : 'Hello world!',
          messageType : 'message'
      }
    const expectedAction = {
        type: types.SEND_MESSAGE_TO_CHAT,
        message
    };
    
    expect(actions.sendMessageToChat(message)).toEqual(expectedAction)
  })

  it('Receive a message from the chat server', () => {
    const message = {
          from : 'Bob',
          avatar : 0,
          content : 'Hello world!',
          messageType : 'message'
      }
    const expectedAction = {
        type: types.NEW_MESSAGE_FROM_CHAT,
        message
    };
    
    expect(actions.incomingMessageFromChat(message)).toEqual(expectedAction)
  })


})