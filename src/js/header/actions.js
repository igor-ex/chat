import constants from "../../constants/constants";


export const toggleSettingsModule = () => ({ type: constants.TOGGLE_SETTINGS_MODULE });
export const toggleSettingsModuleStore = () => ({ type: constants.TOGGLE_SETTINGS_MODULE_STORE });
export const setLocale = () => ({ type: constants.SET_LOCALE });
export const toggleServiceMsg = () => ({ type: constants.TOGGLE_SERVICE_MSG});
export const toggleServiceMsgStore = () => ({ type: constants.TOGGLE_SERVICE_MSG_STORE});
export const blackListUser = (username) => ({ type: constants.BLACK_LIST_USER, payload: username});



