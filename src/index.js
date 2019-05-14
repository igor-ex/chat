import React from 'react';
import ReactDOM from 'react-dom';
import MainComponent from './js/mainComponent/index.jsx';
import './styles/index.less';
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';
import reducer from './js/reducers/reducers';
import createSagaMiddleware from 'redux-saga';
import { applyMiddleware } from 'redux';
import rootSaga from './js/rootSaga/rootSaga';

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(sagaMiddleware)));

window.store = store;
sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <Provider store={store}>
        <MainComponent/>
    </Provider>,
    document.querySelector('#root')
);
