import React from 'react';
import './sidebar.less';
import UserBlock from "../chat/components/usersBlock/";


export default class Sidebar extends React.PureComponent {
    render() {
        const {
            toggleChatModule,
        } = this.props;

        return (
            <div className="sidebar">
                <button className="button-sidebar" onClick={toggleChatModule}>CHAT</button>
                <UserBlock/>
            </div>
        );
    }
}