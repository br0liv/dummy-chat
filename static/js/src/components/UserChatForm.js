import React, { Component, PropTypes } from 'react';
import ReactDOM from "react-dom";
import * as actions from '../redux/Actions';
import { connect } from 'react-redux';

class UserChatForm extends Component{
    constructor(props){
        super(props);

        this.state = {
            message : '',
            isInvalid: false
        }
        //Bindings
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this)
    }

    handleInputChange(e){
        this.setState({
            message:  e.target.value
        });
    }

    handleFormSubmit(e){
        e.preventDefault();

        //Check for blank messages
        if( this.state.message !== "" ){
            let message = {
                from : this.props.user.username,
                avatar : this.props.user.avatar,
                content : this.state.message,
                messageType : 'message'
            }

            //Dispatch action to the store
            this.props.sendMessageToChat(message);

            //Setup new state
            let newState = {};
            newState.message = '';

            if( this.state.isFormInvalid == true ){
                newState.isFormInvalid = false;
            }
            //Update the state
            this.setState( newState );   

        }
        //In case the message was left blank, trigger error message
        else{
            this.setState({ isFormInvalid: true }); 
        }
    }
    render(){
        return(
            <li className="user-form">
                <div className="header">{ this.props.user.username }</div>
                <form name="chat_message_form" onSubmit={ this.handleFormSubmit }>
                    <label htmlFor="chat_message">Type your message bellow</label>
                    <textarea value={ this.state.message } id="chat_message" name="chat_message" onChange={ this.handleInputChange }></textarea>
                    { this.state.isFormInvalid ? <p className="error">Message cannot be blank</p> : null }
                    <input type="submit" value="Send" name="send" id="send" />
                </form>
            </li>
        )
    }
}

function mapDispatchToProps( dispatch ){
    return{
        sendMessageToChat: function(message){
            dispatch( actions.sendMessageToChat(message) )
        },
    }
}

export default connect(null,mapDispatchToProps)(UserChatForm);
