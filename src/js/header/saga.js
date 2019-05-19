import constants from "../../constants/constants";
import { takeEvery, put,  } from 'redux-saga/effects';
import * as actions from './actions';

export default function* watchSettingsSaga() {
    yield takeEvery(constants.TOGGLE_SETTINGS_MODULE, toggleSettingsModule);
    yield takeEvery(constants.TOGGLE_SERVICE_MSG, toggleServiceMsg);
}


function* toggleSettingsModule() {
    console.log("toggle Settings");
    yield put(actions.toggleSettingsModuleStore());
}

function* toggleServiceMsg() {
    yield put(actions.toggleServiceMsgStore());
}