import * as types from '../constants/ActionTypes';

let data = JSON.parse(localStorage.getItem('CART'));
let initialState = data ? data : [];
// Tìm product theo id
let findIndex = (cart, id) => {
    let index = -1;
    for (let i = 0; i < cart.length; i++) {
        if (cart[i].product.id === id) {
            return index = i;
        }
    }
    return index;
}

const cart = (state = initialState, action) => {
    let { product, quantity } = action;
    let index = -1;
    switch (action.type) {
        case types.ADD_TO_CART:
            index = findIndex(state, product.id);
            if (index !== -1) {
                state[index].quantity += quantity;
            } else {
                state.push({
                    product,
                    quantity
                });
            }
            localStorage.setItem("CART", JSON.stringify(state));
            return [...state];
        case types.DELETE_CART:
            index = findIndex(state, action.id);
            if (index !== -1) {
                state.splice(index, 1);
            }
            localStorage.setItem("CART", JSON.stringify(state));
            return [...state]

        case types.UPDATE_CART:
            index = findIndex(state, action.id);
            if (index !== -1 && quantity >= 1) {
                state[index].quantity = quantity;
            }
            localStorage.setItem("CART", JSON.stringify(state));
            return [...state];

        default: return [...state];
    }
};

export default cart;