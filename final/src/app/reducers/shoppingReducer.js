import * as ConstantProducts from '../constants/shoppingConstants';
import merge from 'lodash/merge';

export function shoppingReducer(state = {products: [], is_loading: false}, action) {
    switch (action.type) {
        case ConstantProducts.GET_SHOPPING_LIST_PENDING: {
            state = {
                ...state, 
                is_loading: true
            };
            break;
        }
        case ConstantProducts.GET_SHOPPING_LIST_FULFILLED: {
            state = {
                ...state, 
                is_loading: false, 
                products: action.payload.data
            };
            break;
        }
        case ConstantProducts.GET_SHOPPING_LIST_REJECTED: {
            state = {
                ...state, 
                is_loading: false, 
                error_message: action.payload.message
            };
            break;
        }
        case ConstantProducts.GET_QUICK_LIST_PENDING: {
            state = {
                ...state,
                is_loading: true
            };
            break;
        }
        case ConstantProducts.GET_QUICK_LIST_FULFILLED: {
            state = {
                ...state, 
                is_loading: false, 
                products: action.payload.data
            };
            break;
        }
        case ConstantProducts.GET_QUICK_LIST_REJECTED: {
            state = {
                ...state, 
                is_loading: false, 
                error_message: action.payload.message
            };
            break;
        }
        case ConstantProducts.SHOW_WAITING_PRODUCTS_PENDING: {
            state = {
                ...state,
                is_loading: true
            };
            break;
        }
        case ConstantProducts.SHOW_WAITING_PRODUCTS_FULFILLED: {
            state = {
                ...state, 
                is_loading: false, 
                products: action.payload.data
            };
            break;
        }
        case ConstantProducts.SHOW_WAITING_PRODUCTS_REJECTED: {
            state = {
                ...state, 
                is_loading: false, 
                error_message: action.payload.message
            };
            break;
        }
        case ConstantProducts.ADD_PRODUCT: {
            state = {
                ...state,
                is_loading: false,
                products: [...state.products, action.payload]
            };
            break;
        }
        case ConstantProducts.EDIT_PRODUCT: {
            let index = null;
            state.products.forEach((value, i) => {
                if(parseInt(value.id) === parseInt(action.payload.id)){
                    index = i;
                }
            });

            if(index !== null)
            {
                state = merge({}, state);
                state.products[index] = action.payload;
            }
            break;
        }
        case ConstantProducts.DELETE_PRODUCT_FULFILLED: {
            let index = null;
            console.log("action.payload");
            console.log(action.payload);
            console.log(state.products);
            state.products.forEach((value, i) => {
                if((value._id) === (action.payload.data._id)){
                    index = i;
                }
            });

            if(index !== null)
            {
                state = merge({}, state);
                state.products.splice(index, 1);
            }
            break;

        }
        case ConstantProducts.POSTPONE_PRODUCT: {
            let index = null;
            state.products.forEach((value, i) => {
                if(parseInt(value.id) === parseInt(action.payload.id)){
                    index = i;
                }
            });

            if(index !== null)
            {
                state = merge({}, state);
                state.products.splice(index, 1);
            }
            break;
        }
    }
    return state;
}