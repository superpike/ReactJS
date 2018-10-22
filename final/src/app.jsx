import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

//Связка redux - react
import {Provider} from 'react-redux';
//store
import store from './app/store';

import Layout from './app/layouts/Layout';
import ShoppingList from './app/pages/ShoppingList';
import PageNotFound from './app/pages/PageNotFound';
import NewShoppingList from './app/pages/NewShoppingList';
import QuickShoppingList from './app/pages/QuickShoppingList';
import WaitingList from './app/pages/WaitingList';


const app = document.getElementById('app');


ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={Layout}>
                <IndexRoute component={ShoppingList}/>
                <Route path="list/:typeList/:productID" component={NewShoppingList}/>
                <Route path="list/:typeList" component={NewShoppingList}/>
                <Route path="list" component={ShoppingList}>
                    <Route path=":typeList" component={NewShoppingList}/>
                </Route>
                <Route path="waitingList" component={WaitingList}/>
                <Route path="quickList" component={QuickShoppingList}/>
                <Route path="*" component={PageNotFound}/>
            </Route>
        </Router>
    </Provider>,
app);