import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import Layout from './app/layouts/Layout';
import MainPage from './app/pages/Main';
import PageNotFound from './app/pages/PageNotFound';
import Blogs from './app/pages/Blogs';
import Blog from './app/pages/Blog';
import Users from './app/pages/Users';
import User from './app/pages/User';


const app = document.getElementById('app');


ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={Layout}>
            <IndexRoute component={MainPage}/>
            <Route path="posts" component={Blogs}>
                <Route path=":blogId" component={Blog}/>
            </Route>
            <Route path="users" component={Users}>
                    <Route path=":userId" component={User}/>
            </Route>
                <Route path="*" component={PageNotFound}/>
        </Route>
    </Router>,
app);