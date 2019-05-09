import config from '../../config/config';
import { combineReducers } from 'redux';
import constants from '../../constants/constants';

const users = [];

const usersReducer = (state = users, action) => {
    switch (action.type) {
        case "ADD_USER": return {
            // ToDo create logic of adding new user
        };
        default:
            return state
    }
};

const messages = [];

const messageReducer = (state = messages, action) => {
    switch (action.type) {
        case constants.SHOW_CHAT_MESSAGE: return {
            ...state,
            action.payload
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
    users: usersReducer,
    config: configReducer,
    messages: messageReducer
});