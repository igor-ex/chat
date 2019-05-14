import React from 'react';
import ReactDOM from 'react-dom';
import './authorizeStyle.css'

export default class Login extends React.Component{

    render(){
        return (
            <React.Fragment>
                <div className="authorization-form">
                    <div id="msgBox" className="msgBox"></div>
                    <label className="authorization-form__header">Authorization</label>
                    <input id="authLog" type="text" className="authorization-form__input-login" placeholder="Login name" required/>
                        <button id="submitLogin" type = "button" className="authorization-form__confirm-button" onClick={this.props.changeLogState}>Login</button>
                </div>
            </React.Fragment>
        )
    }
}