import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import HeaderCart from '../components/HeaderCart';
import HeaderCartItem from '../components/HeaderCartItem';
import HeaderCartTotal from '../components/HeaderCartTotal';
import { actDeleteToCart } from '../actions/index';

class HeaderCartContainer extends Component {
    render() {
        let { cart } = this.props
        return (
            <Header cart={cart}>
                <HeaderCart cart={cart}>
                    {this.showHeaderCartItem(cart)}
                </HeaderCart>
                {this.showHeaderCartTotal(cart)}
            </Header>
        );
    }

    showHeaderCartItem = (cart) => {
        let result = null;
        if (cart.length > 0) {
            result = cart.map((item, index) => {
                return <HeaderCartItem key={index} item={item}
                    handleDeleteCart={this.props.handleDeleteCart}
                />
            });
        }
        return result;
    }

    showHeaderCartTotal = (cart) => {
        if (cart.length > 0) {
            let result = null;
            result = <HeaderCartTotal cart={cart} />
            return result;
        }
    }
}

const mapStateToProp = (state) => {
    return {
        cart: state.cart,
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        handleDeleteCart: id => {
            dispatch(actDeleteToCart(id));
        }
    }
}
export default connect(mapStateToProp, mapDispatchToProps)(HeaderCartContainer);