import * as types from '../constants/ActionTypes';
import callAPI from '../services/callAPI';

export const actFetchProductsRequest = () => {
    return dispatch => {
        dispatch(actFetchProducts());
        callAPI("products", 'GET', null)
            .then(res => {
                dispatch(actFetchProductsSuccess(res.data));
            });
    }
}

export const actFetchProducts = () => {
    return {
        type: types.FETCH_PRODUCTS,
    }
}

export const actFetchProductsSuccess = (products) => {
    return {
        type: types.FETCH_PRODUCTS_SUCCESS,
        payload: products
    }
}

export const actAddToCart = (product, quantity) => {
    return {
        type: types.ADD_TO_CART,
        product,
        quantity
    }
}

export const actDeleteToCart = (id) => {
    return {
        type: types.DELETE_CART,
        id
    }
}

export const actUpdateCart = (id, quantity) => {
    return {
        type: types.UPDATE_CART,
        id,
        quantity
    }
}

export const actSearch = (keyword) => {
    return {
        type: types.SEARCH,
        keyword
    }
}

export const actSort = (sort) => {
    return {
        type: types.SORT,
        sort
    }
}

export const actSortMobile = (sort) => {
    return {
        type: types.SORT_MOBILE,
        sort
    }
}

export const actMessageOpen = () => {
    return {
        type: types.MESSAGE_OPEN
    }
}

export const actMessageClose = () => {
    return {
        type: types.MESSAGE_CLOSE
    }
}

export const actPriceAsc = () => {
    return {
        type: types.SORT_PRICE_ASC,
    }
}

export const actpriceDesc = () => {
    return {
        type: types.SORT_PRICE_DESC,
    }
}