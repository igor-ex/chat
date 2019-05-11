import React, {Component} from 'react';
import './message-block.less';

export default class MessageBlock extends Component {
    emitMessage = (ev) => {
        const text = ev.target.value;
        if (text.trim() === '' || ev.key !== 'Enter') {
            return;
        }
        this.props.emitMessage(text);
        this.props.setCurrentMessage('');
    };
    setCurrentMessage = (ev) => {
        const text = ev.target.value;
        this.props.setCurrentMessage(text);
    };

    render() {
        const {
            messages,
            currentMessage
        }
            = this.props;
        const mElems = messages.map((item, index) => {
            const user = item.user ? <div>{item.user}: </div> : null;
            return (
                <div key={index} className="chat__message">
                    {user}
                    <div>{item.text}</div>
                </div>
            );
        });
        return (
            <>
                {mElems}
                <textarea value={currentMessage}
                       onChange={this.setCurrentMessage}
                       onKeyUp={this.emitMessage}
                       autoFocus
                          className="chat__input"
                />
            </>
        );
    }
}