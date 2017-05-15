import React, { Component, PropTypes } from 'react';
import ReactDOM from "react-dom";
import { connect } from 'react-redux';
import * as actions from '../redux/Actions';


class NewUser extends Component{
    constructor(props){
        super(props);

        this.state = {
            avatar : 0,
            username: '',
            isFormInvalid: false
        }
        //Set bindings
        this.updateAvatarImage = this.updateAvatarImage.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    //Render dropdown with the avatar list
    renderAvatarList(){
        let listContent = this.props.avatarList;
        let options = listContent.map( ( avatar, index) => <option key={index} value={index} >{ avatar.name }</option>);
        return options;
    }
    //Gets the image url for the selected avatar
    getAvatarImage(){
        let imagePath = "img/";
        let avatarIndex = this.state.avatar;
        return imagePath +  this.props.avatarList[ avatarIndex ].url;
    }
    //Update the selected avatar
    updateAvatarImage(e){
        this.setState({
            avatar: e.target.value,
        });
    }

    handleInputChange(e){
        this.setState({ username: e.target.value });
    }

    handleFormSubmit(e){
        e.preventDefault();
        let formId = '#' + e.target.getAttribute('id');

        if( this.state.username !== "" ){
            
            //Dispatch action to the store
            this.props.addUserToChat( {
                username: this.state.username,
                avatar: this.state.avatar
            } );
            //Update the state
            this.setState({ isFormInvalid: false, username: '' });
        }
        else{
            this.setState({ isFormInvalid: true });
        }
    }

    render(){
        return(
            <div className="new-user-form">
                <form id="user-form" name="user-form" onSubmit={ this.handleFormSubmit }>
                    <ul>
                        <li>
                            <img src="avatar-image" src={ this.getAvatarImage() } />
                        </li>
                        <li>
                            <label className="sr-only" htmlFor="username">Username</label>
                            <input type="text" id="username" name="username" value={ this.state.username } onChange={this.handleInputChange} maxLength="13" placeholder="Choose a username"/>
                        </li>
                        <li>
                            <label className="sr-only" htmlFor="avatar">Avatar</label>
                            <select id="avatar" name="avatar" onChange={ this.updateAvatarImage } >
                                { this.renderAvatarList() }
                            </select>
                             
                        </li>
                    </ul>
                    <input type="submit" value="Join" name="submit" id="submit" />
                    { this.state.isFormInvalid ? <p className="error">Username required</p> : null }
                </form>

            </div>
        )
    }
}

function mapStateToProps(state) {
    return { 
        avatarList: state.avatars
    };
}

function mapDispatchToProps( dispatch ){
    return{
        addUserToChat: (user)=> dispatch( actions.addUserToChat(user) )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(NewUser);