import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, compose} from 'redux';
import reducer from './store/reducer'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const logger = (store) => {
    return next => {
        return action => {
            console.log('[Middleware] Dispatching', action);
            const result = next(action)
            console.log('[Middleware] next state', store.getState())
            return result;
        }
    }
}
 
const store = createStore(
                            reducer,
                            compose(
                                applyMiddleware(logger, thunk),
                                window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
                            )
                        );

ReactDOM.render(
                <Provider store={store}>
                    <App /> 
                </Provider>,
                document.getElementById('root')
                );
registerServiceWorker();
