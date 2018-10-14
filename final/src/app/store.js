import {createStore, combineReducers, applyMiddleware} from 'redux';

//Middleware
import logger from 'redux-logger';
import promise from 'redux-promise-middleware';
import thunk from 'redux-thunk';

//Reducers
import {shoppingReducer} from './reducers/shoppingReducer';

const reducers = combineReducers({
    products: shoppingReducer
});

const middleware = applyMiddleware(promise(), logger, thunk);

const store = createStore(reducers, middleware);
export default store;