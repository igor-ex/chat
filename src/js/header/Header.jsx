import React from 'react';
import PureComponent from '../../base/pureComponent/PureComponent.jsx';
import './header.less';
import Settings from './Settings';

export default class Header extends PureComponent {
    render() {
        return (
            <div className="header">
                <a className="chat-header" href="http://localhost:3000">Group Chat
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </a>
                <div className="header__h2">{this.props.userName ? "Hello, " + this.props.userName : "Hello"}</div>
                <button
                    className="header-settings_button"
                    onClick = { this.props.toggleSettingsModule }

                />
                <Settings />
            </div>
        );
    }
}