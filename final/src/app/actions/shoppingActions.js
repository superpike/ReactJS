import {ADD_PRODUCT, GET_QUICK_LIST, GET_SHOPPING_LIST, SHOW_WAITING_PRODUCTS, EDIT_PRODUCT, DELETE_PRODUCT} from "../constants/shoppingConstants";
import axios from 'axios';

export function addProduct(name, quantity, marketplace) {
    return {
        type: ADD_PRODUCT,
        payload: {name, quantity, marketplace}
    };
}

export function editProduct(id, name, quantity, marketplace) {
    return {
        type: EDIT_PRODUCT,
        payload: {id, name, quantity, marketplace}
    };
}

export function deleteProduct(id) {
    return {
        type: DELETE_PRODUCT,
        payload: axios.get('http://localhost:8082/api/shopping/delete/'+id)
    };
}

export function postponeProduct(id, name, quantity, marketplace) {
    return {
        type: POSTPONE_PRODUCT,
        payload: {id, name, quantity, marketplace}
    };
}

export function getProducts() {
    return {
        type: GET_SHOPPING_LIST,
        payload: axios.get('http://localhost:8082/api/shopping/')
    };
}

export function getQuickProducts() {
    return {
        type: GET_QUICK_LIST,
        payload: axios.get('http://localhost:8082/api/shopping/quick')
    };
}

export function showWaitingProducts() {
    return {
        type: SHOW_WAITING_PRODUCTS
    };
}