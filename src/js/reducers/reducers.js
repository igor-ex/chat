import config from '../../config/config';
import { combineReducers } from 'redux';
import constants from '../../constants/constants';

const users = {
    users: []
};

const usersReducer = (state = users, action) => {
    switch (action.type) {
        case constants.USER_LIST_RECEIVED:
            return {
                ...state,
                users: action.payload
            };
        default:
            return state
    }
};

const messages = {
    currentMessage: '',
    messages: []
};

const messageReducer = (state = messages, action) => {
    switch (action.type) {
        case constants.MESSAGE_RECEIVED:
            //debugger;
            return {
                ...state,
                messages: [
                    ...state.messages,
                    action.payload
                ]
            };
        case constants.MESSAGE_HISTORY_RECEIVED:
            return {
                ...state,
                messages: [
                    ...action.payload,
                    ...state.messages
                ]
            };
        case constants.SET_CURRENT_MESSAGE:
            return {
                ...state,
                currentMessage: action.payload
            };
        default:
            return state
    }
};

const configReducer = (state = config, action) => {
    switch (action.type) {
        case constants.TOGGLE_CHAT_MODULE_STORE: return {
            ...state,
            blocksActive: {
                chat: !state.blocksActive.chat,
            }
        };
        case constants.SET_STATUS: return {
            ...state,
            modules: {
                ...state.modules,
                chat: {
                    ...state.modules.chat,
                    status: action.payload
                }
            }
        };
        default:
            return state
    }
};

export default combineReducers({
    config: configReducer,
    users: usersReducer,
    messages: messageReducer
});