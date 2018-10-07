import dispatcher from '../dispatcher';
import {ADD_POST, GET_POSTS, EDIT_POST, DELETE_POST} from "../constants/postConstants";
import axios from 'axios';

export function addPost(title, userId, body) {
    dispatcher.dispatch({
        type: ADD_POST,
        payload: {title, userId, body}
    });
}

export function editPost(id, title, userId, body) {
    dispatcher.dispatch({
        type: EDIT_POST,
        payload: {id, title, userId, body}
    });
}

export function deletePost(id, title, userId, body) {
    dispatcher.dispatch({
        type: DELETE_POST,
        payload: {id, title, userId, body}
    });
}

export function getPosts() {
    axios
        .get('https://jsonplaceholder.typicode.com/posts/')
        .then((response) => {
            dispatcher.dispatch({
                type: GET_POSTS,
                payload: response.data
            });
        });
}