import immutable from 'immutable';
import * as types from  './Types';

const initialState = {
    users: immutable.List([]),
    messages: immutable.List([]),
    avatars:[
        {
            url: "dog_vader.jpg",
            name: "Dog Vader"
        },
        {
            url: "doge.jpg",
            name: "Doge"
        },
        {
            url: "nutella.jpg",
            name: "Nutella"
        },
        {
            url: "elizabeth.jpg",
            name: "Elizabeth"
        }
        ,
        {
            url: "grumpy_cat.jpg",
            name: "Grumpy cat"
        }
    ]
};


function chatApp(state = initialState, action) {

    switch(action.type){
        case types.ADD_USER_TO_CHAT:
            var newState = Object.assign({}, state);

            newState.users = newState.users.push({
                username: action.username,
                avatar: action.avatar
            });

            return newState;
        
        case types.SEND_MESSAGE_TO_CHAT:
            var newState = Object.assign({}, state);
            newState.messages = newState.messages.push(action.message);
            return newState;
        
        case types.NEW_MESSAGE_FROM_CHAT:
            var newState = Object.assign({}, state);
            newState.messages = newState.messages.push(action.message);
            return newState;
            
        default:
            return state;
    }
}

export default chatApp