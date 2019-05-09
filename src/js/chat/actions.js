import constants from '../../constants/constants';

export const setStatus = payload => ({ type: constants.SET_STATUS, payload });
export const toggleChatModule = () => ({ type: constants.TOGGLE_CHAT_MODULE });
export const toggleChatModuleStore = () => ({ type: constants.TOGGLE_CHAT_MODULE_STORE });
export const sendMessage = (payload) => ({type: constants.SEND_MESSAGE, payload});
export const showChatMessage = payload => ({type: constants.SHOW_CHAT_MESSAGE, payload});