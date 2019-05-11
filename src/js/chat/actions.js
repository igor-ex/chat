import constants from '../../constants/constants';

export const setStatus = payload => ({ type: constants.SET_STATUS, payload });
export const toggleChatModule = () => ({ type: constants.TOGGLE_CHAT_MODULE });
export const toggleChatModuleStore = () => ({ type: constants.TOGGLE_CHAT_MODULE_STORE });
export const messageReceived = (user, text) => ({type: constants.MESSAGE_RECEIVED, payload: {user, text}});
export const messageHistoryReceived = history => ({type: constants.MESSAGE_HISTORY_RECEIVED, history});