import { all } from 'redux-saga/effects';
import watchChatSaga from '../chat/saga';

export default function* saga() {
    yield all([
        watchChatSaga(),
    ]);
}