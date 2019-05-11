import { takeEvery, put, call, take } from 'redux-saga/effects';
import { eventChannel, END } from 'redux-saga';
import constants from '../../constants/constants';
import * as actions from './actions';

let ws = null;
let channel = null;

export default function* watchChatSaga() {
    yield takeEvery(constants.INIT_CONNECTION, initConnection);
    yield takeEvery(constants.TOGGLE_CHAT_MODULE, toggleChatModule);
}

function* toggleChatModule() {
    yield put(actions.toggleChatModuleStore());
}

function* emitMessageWorker (action) {
    yield put(actions.messageReceived('', action.payload));
    if (channel && ws) {
        try {
            yield ws.send(action.payload);
        } catch (err) {
            if (err.name === 'InvalidStateError') {
                console.log('сообщение сейчас отправить нельзя. Сокет плохой');
            } else {
                throw (err);
            }
        }
    } else {
        console.log('message can\'t be send because socket is dysfunctional');
    }
}

function* initConnection() {
    yield takeEvery(constants.EMIT_MESSAGE, emitMessageWorker);
    channel = yield call(createWebSocket);

    while(true) {
        if (channel) {
            const eventAction = yield take(channel);
            yield put(eventAction);
        } else {
            console.log('ending in else');
            channel = yield new Promise((resolve) => {
                setTimeout(() => {
                    createWebSocket();
                    resolve();
                }, 1000);
            });
        }

    }
}

export function createWebSocket() {
    ws = new WebSocket('ws://localhost:4000');

    return eventChannel(emitter => {
        ws.onopen = () => {
            emitter(actions.setStatus('ONLINE'));
        };

        ws.onclose = () => {
            emitter(END);
            console.log('ending');
            emitter(actions.setStatus('DISCONNECTED'));
        };

        ws.onmessage = response => {
            const data = JSON.parse(response.data);
            switch(data.mType){
                case 'new_message':
                    emitter(actions.messageReceived(data.content.user, data.content.text));
                    break;
                case 'message_list':
                    emitter(actions.messageHistoryReceived(data.content));
                    break;
                case 'user_list':
                    emitter(actions.userListReceived(data.content));
                    break;
                default:
                    console.log('unfamiliar message was received from server');
            }

        };

        return () => {
            closeWs();
        }
    })
}

export function closeWs() {
    channel.close();
    channel = null;

}
