import * as types from '../constants/ActionTypes';

let initialState = {
    isLoading: false,
    currentProduct: [],
    searchValue: '',
    sort: {
        by: 'status',
        value: 1  // 1: phổ biến , 0 : mới nhất, -1: bán chạy
    },
    messageCart: false,
    sortPrice: ""
}

const products = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_PRODUCTS:
            return {
                ...state,
                isLoading: true
            }
        case types.FETCH_PRODUCTS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                currentProduct: action.payload
            }
        case types.SEARCH:
            const { keyword } = action;
            //const searchValue = state.currentProduct.filter(val => val.name.toLowerCase().includes(keyword.toLowerCase()));
            return {
                ...state,
                searchValue: keyword
            }
        case types.SORT:
            return {
                ...state,
                sort: {
                    by: action.sort.by,
                    value: action.sort.value
                }
            }
        case types.SORT_MOBILE:
            return {
                ...state,
                sort: {
                    by: action.sort.by,
                    value: action.sort.value
                }
            }
        case types.MESSAGE_OPEN:
            return {
                ...state,
                messageCart: true
            }
        case types.MESSAGE_CLOSE:
            return {
                ...state,
                messageCart: false
            }
        case types.SORT_PRICE_ASC: {
            return {
                ...state,
                sortPrice: "asc"
            }
        }
        case types.SORT_PRICE_DESC: {
            return {
                ...state,
                sortPrice: "desc"
            }
        }

        default: return state
    }
};

export default products;
