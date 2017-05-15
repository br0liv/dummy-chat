import * as actions from  '../js/src/redux/Actions';
import * as types from  '../js/src/redux/Types';
import chatApp from  '../js/src/redux/Reducers';
import immutable from 'immutable';


const initialStateMock = {
    users: immutable.List([]),
    messages: immutable.List([]),
    avatars:[]
}
describe('chat app reducer', () => {
  it('should return the initial state', () => {
    expect(
      chatApp(initialStateMock, {})
    ).toEqual(
        {
            users: immutable.List([]),
            messages: immutable.List([]),
            avatars:[]
        }
    )
  })

  it('should handle ADD_USER_TO_CHAT', () => {
    expect(
      chatApp(initialStateMock, {
            type: types.ADD_USER_TO_CHAT,
            username: "Bob",
            avatar: 2
        }
    )
    ).toEqual(
        {
            users: immutable.List([
                {
                    username: "Bob",
                    avatar: 2
                }
            ]),
            messages: immutable.List([]),
            avatars:[]
        }
    )
  })

  it('should handle SEND_MESSAGE_TO_CHAT', () => {
    expect(
      chatApp(initialStateMock, {
            type: types.SEND_MESSAGE_TO_CHAT,
            message : {
                from : 'Bob',
                avatar : 0,
                content : 'Hello world!',
                messageType : 'message'
            }
        }
    )
    ).toEqual(
        {
            users: immutable.List([]),
            messages: immutable.List([
                {
                    from : 'Bob',
                    avatar : 0,
                    content : 'Hello world!',
                    messageType : 'message'
                }
            ]),
            avatars:[]
        }
    )
  })

   it('should handle NEW_MESSAGE_FROM_CHAT', () => {
    expect(
      chatApp(initialStateMock, {
            type: types.NEW_MESSAGE_FROM_CHAT,
            message : {
                from : 'Bob',
                avatar : 0,
                content : 'Hello world!',
                messageType : 'message'
            }
        }
    )
    ).toEqual(
        {
            users: immutable.List([]),
            messages: immutable.List([
                {
                    from : 'Bob',
                    avatar : 0,
                    content : 'Hello world!',
                    messageType : 'message'
                }
            ]),
            avatars:[]
        }
    )
  })

})