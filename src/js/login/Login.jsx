import React from 'react';
import ReactDOM from 'react-dom';
import './authorizeStyle.css'

export default class Login extends React.Component{

    handleEnter = (ev) => {
        if (ev.key !== 'Enter') {
            return;
        }
        this.props.changeLogState();
    };

    render(){
        const authLogin = this.props.logInputRef;
        const msg = this.props.msg;
        console.log("PROPS_LOG",this.props.logInputRef);
        return (
            <React.Fragment>
                <div className="authorization-form">
                    <div className="msgBox">{msg}</div>
                    <label className="authorization-form__header">Authorization</label>
                    <input ref={authLogin}
                           onKeyUp={this.handleEnter}
                           type="text"
                           className="authorization-form__input-login"
                           placeholder="Login name"
                           required
                    autoFocus/>
                        <button id="submitLogin"
                                type="button"
                                className="authorization-form__confirm-button"
                                onClick={this.props.changeLogState}>Login</button>
                </div>
            </React.Fragment>
        )
    }
}