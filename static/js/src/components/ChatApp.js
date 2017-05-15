import React, { Component } from 'react';
import ReactDOM from "react-dom";
import { connect } from 'react-redux';
import * as actions from '../redux/Actions';

import Header from './Header';
import Sidebar from './Sidebar';
import Chat from './Chat';
import NewUser from './NewUser';
import ConnectedUsers from './ConnectedUsers';

import '../../../css/chat.less';

//Main component for the application
class ChatApp extends Component{
    render(){
        return(
            <div className="main-content">
                
                <Sidebar>
                    <Header/>
                    <NewUser/>
                    <ConnectedUsers users={ this.props.users } />
                </Sidebar>
                <Chat messages={this.props.messages} />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return { 
        users: state.users,
        messages: state.messages
    };
}

function mapDispatchToProps( dispatch ){
    return{
        addUserToChat: function(user){
            dispatch( actions.addUserToChat(user) )
        },

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ChatApp);