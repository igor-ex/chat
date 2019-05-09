import { takeEvery, put, call, take } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import constants from '../../constants/constants';
import * as actions from './actions';

let ws = null;
let channel = null;

export default function* watchChatSaga() {
    yield takeEvery(constants.INIT_CONNECTION, initConnection);
    yield takeEvery(constants.TOGGLE_CHAT_MODULE, toggleChatModule);
    yield takeEvery(constants.SEND_MESSAGE, sendMessage)
}

function* toggleChatModule() {
    yield put(actions.toggleChatModuleStore());
}

function* initConnection() {
    channel = yield call(createWebSocket);

    while(channel) {
        const eventAction = yield take(channel);
        yield put(eventAction);
    }
}

function* sendMessage(action){
    yield put();
}

export function createWebSocket() {
    ws = new WebSocket('ws://localhost:3000');

    return eventChannel(emitter => {
        ws.onopen = () => {
            emitter(actions.setStatus('ONLINE'));
        };

        ws.onclose = () => {
            emitter(actions.setStatus('DISCONNECTED'));
        };

        ws.onmessage = response => {
            const data = JSON.parse(response.data).text;
            emitter(actions.showChatMessage(data));
            console.log(data);
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
