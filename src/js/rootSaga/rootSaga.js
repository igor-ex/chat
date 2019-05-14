import { all } from 'redux-saga/effects';
import watchChatSaga from '../chat/saga';
import watchSettingsSaga from '../header/saga';

export default function* saga() {
    yield all([
        watchChatSaga(),
        watchSettingsSaga(),
    ]);
}