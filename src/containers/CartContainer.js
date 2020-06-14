import React, { Component } from 'react';
import { connect } from 'react-redux';

import CartTable from '../components/CartTable';
import CartItem from '../components/CartItem';
import Cart from '../components/Cart';
import CartResult from '../components/CartResult';

import { actDeleteToCart, actUpdateCart } from '../actions/index';

class CartContainer extends Component {
    render() {
        let { cart } = this.props;
        return (
            <Cart>
                <CartTable>
                    {this.showCartItem(cart)}
                    {this.showTotalAmount(cart)}
                </CartTable>
            </Cart>
        );
    }

    showCartItem = (cart) => {
        let result = null;
        if (cart.length > 0) {
            result = cart.map((item, index) => {
                return <CartItem
                    key={index}
                    item={item}
                    handleDeleteCart = {this.props.handleDeleteCart}
                    handleUpdateCart={this.props.handleUpdateCart} 
                />
            });
        }
        return result;
    }

    showTotalAmount = (cart) => {
        let result = null;
        if (cart.length > 0) {
            result = <CartResult cart={cart} />
        }
        return result;
    }
}

const mapStateToProps = state => {
    return {
        cart: state.cart
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleDeleteCart: (id) => {
            dispatch(actDeleteToCart(id));
        },
        handleUpdateCart: (id, quantity) => {
            dispatch(actUpdateCart(id, quantity));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);