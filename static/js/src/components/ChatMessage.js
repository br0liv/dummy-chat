import React, { Component } from 'react';
import ReactDOM from "react-dom";
import { connect } from 'react-redux';

//Chat message component
class ChatMessage extends Component{
    constructor(props){
        super(props);
        this.getAvatarImage = this.getAvatarImage.bind(this);

        
    }
    getAvatarImage(){
        let imagePath = "img/";
        let avatarIndex = this.props.message.avatar;
        return imagePath +  this.props.avatarList[ avatarIndex ].url;
    }
    render(){
        return(
            <li className={ 'type-' + this.props.message.messageType} >
                {   this.props.message.messageType == "message" &&
                    <img src={ this.getAvatarImage() } />
                }
                <div className="message-content">
                    <span className="from">{ this.props.message.from }: </span>
                    <p>{ this.props.message.content }</p>
                </div>
            </li>
        )
    }
}

function mapStateToProps(state) {
    return { 
        avatarList: state.avatars
    };
}

export default connect(mapStateToProps)(ChatMessage);