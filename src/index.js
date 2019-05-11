import React from 'react';
import ReactDOM from 'react-dom';
import MainComponent from './js/mainComponent/index.jsx';
import './styles/index.less';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './js/reducers/reducers';
import createSagaMiddleware from 'redux-saga';
import { applyMiddleware } from 'redux';
import rootSaga from './js/rootSaga/rootSaga';

/*
окошко авторизации
реконнект
кнопочки открытия - закрытия
убирать имя пользователя в чате если повторяется
прокрутку делать или не делать
исправить БЭМ у сайдбара и месиджей
сделать поле ввода сообщений textarea
организовать так, чтобы на сервере при подключении пользователя код не ждал пока будет передана история сообщений а назначил слушателей в первую очередь
сделать сообщения сервера другого цвета чем сообщения пользователей
 */

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware));

window.store = store;
sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <Provider store={store}>
        <MainComponent/>
    </Provider>,
    document.querySelector('#root')
);
