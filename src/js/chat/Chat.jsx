import React from 'react';
import PureComponent from '../../base/pureComponent/PureComponent.jsx';
import './chat.less';

export default class Chat extends PureComponent {
    render() {
        const {
            status,
            toggleChatModule,
            currentMessage,
            sendMessage
        } = this.props;

        return (
            <div className="chat">
                <h1>{status}</h1>
                <button className="button-close" onClick={toggleChatModule}>X</button>
                <input value={currentMessage} onChange={sendMessage}/>
            </div>
        );
    }
}