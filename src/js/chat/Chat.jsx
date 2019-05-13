

import React from 'react';
import PureComponent from '../../base/pureComponent/PureComponent.jsx';
import './chat.less';
import MessageBlock from "./components/messagesBlock/index.jsx";

export default class Chat extends PureComponent {
    render() {
        const {
            status,
            toggleChatModule,
            currentMessage,
            sendMessage,
        } = this.props;

        return (
            <div className="chat">
                <div className="status">
                <h1>{status}</h1>
                <button className="button-close" onClick={toggleChatModule}>X</button>
                </div>
                <MessageBlock/>
            </div>
        );
    }
}