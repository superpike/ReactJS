import {ADD_POST, GET_POSTS, SHOW_POSTS, EDIT_POST, DELETE_POST} from "../constants/postConstants";
import axios from 'axios';

export function addPost(title, userId, body) {
    return {
        type: ADD_POST,
        payload: {title, userId, body}
    };
}

export function editPost(id, title, userId, body) {
    return {
        type: EDIT_POST,
        payload: {id, title, userId, body}
    };
}

export function deletePost(id, title, userId, body) {
    return {
        type: DELETE_POST,
        payload: {id, title, userId, body}
    };
}

export function getPosts() {
    return {
        type: GET_POSTS,
        payload: axios.get('https://jsonplaceholder.typicode.com/posts/')
    };
}

export function showPosts() {
    return {
        type: SHOW_POSTS
    };
}