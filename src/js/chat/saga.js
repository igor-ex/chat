import { takeEvery, put, call, take, delay, fork } from 'redux-saga/effects';
import { eventChannel, END } from 'redux-saga';
import constants from '../../constants/constants';
import * as actions from './actions';

let ws = null;
let channel = null;
let userName = null;

export default function* watchChatSaga() {
    yield takeEvery(constants.TOGGLE_CHAT_MODULE, toggleChatModule);
    ({userName} = yield take(constants.EMIT_USER_NAME));
    console.log('im here after name');
    yield takeEvery(constants.INIT_CONNECTION, initConnection);
    yield put({type: constants.INIT_CONNECTION});
    yield takeEvery(constants.EMIT_MESSAGE, emitMessageWorker);
}

function* toggleChatModule() {
    yield put(actions.toggleChatModuleStore());
}

function* emitMessageWorker (action) {
    const text = action.payload.trim();
    yield put(actions.messageReceived('', text));
    if (channel && ws) {
        try {
            yield ws.send(JSON.stringify({mType: 'message', content: text}));
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
    console.log('initConnection?');
    channel = yield call(createWebSocket);

    while (channel) {
        console.log('while start');
        const eventAction = yield take(channel);
        console.log(eventAction, 'ev action');
        yield put(eventAction);
        if (eventAction.type === 'CLOSE') {
            closeWs();
            yield delay(2000);
            yield put({type: constants.INIT_CONNECTION});
        }
    }
}

export function createWebSocket() {
        ws = new WebSocket('ws://localhost:4000');
        console.log('after new websocket');

    return eventChannel(emitter => {
        ws.onopen = () => {
            emitter(actions.setStatus('ONLINE'));
            console.log('before onopen');
            console.log(userName, 'username before send it to server');
            ws.send(JSON.stringify({mType: 'user_name', content: userName}));
            console.log('after onopen');
        };

        ws.onclose = () => {
            emitter(actions.setStatus('DISCONNECTED'));
            console.log('ending');
            emitter({type: 'CLOSE'});
            console.log('im here');
            closeWs();
            console.log('after closing');
            //setInterval(() => emitter({type: constants.INIT_CONNECTION}), 1000);
        };

        ws.onmessage = response => {
            const data = JSON.parse(response.data);
            console.log('receiving data from server', data);
            switch(data.mType){
                case 'new_message':
                    emitter(actions.messageReceived(data.content.user, data.content.text));
                    console.log('after emitter');
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
    ws = null;
    setTimeout(() => channel = createWebSocket(), 2000);
    console.log('in closing');
}
