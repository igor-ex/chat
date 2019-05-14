import constants from "../../constants/constants";


export const toggleSettingsModule = () => ({ type: constants.TOGGLE_SETTINGS_MODULE });
export const toggleSettingsModuleStore = () => ({ type: constants.TOGGLE_SETTINGS_MODULE_STORE });
export const setLocale = () => ({ type: constants.SET_LOCALE });
export const toggleServiceMsg = () => ({ type: constants.ENABLE_SERVICE_MSG});
export const blackListUser = (username) => ({ type: constants.BLACK_LIST_USER, payload: username});



