import React, { Component } from 'react';
import {formatNumber} from '../pipes/priceFormatter';
class CartItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            quantity: 0
        }
    }

    // handle form
    handleQuantity = (e) => {
        let target = e.target;
        let value = target.value;
        this.setState({
            quantity: value
        });
    };

    // fortmat price 000.
   

    // total price
    cartTotal = (price, quantity) => {
        return formatNumber(price * quantity);
    }

    // delete cart
    handleDeleteCart = (id) => {
        this.props.handleDeleteCart(id);
    }

    // update cart
    handleUpdateCart = (id, quantity) => {
        this.props.handleUpdateCart(id, + quantity);
    }

    render() {
        let { item } = this.props; 

        return (
            <tr>
                <td className="name__cart">
                    <span>{item.product.name}</span>
                </td>
                <td className="table-product-img">
                    <img src={item.product.image} alt="{item.product.name}" className="cart__image-info" />
                </td>
                <td>
                    <div className="cart-plus-minus cart-plus-minus--width">
                        <div
                            onClick={() => this.handleUpdateCart(item.product.id, + item.quantity - 1)}
                            className="dec qtybutton disable-el">-</div>
                        <input type="number"
                            onChange={this.handleQuantity}
                            className="cart-plus-minus-box"
                            value={item.quantity}
                            onKeyUp={() => this.handleUpdateCart(item.product.id, this.state.quantity)}
                            inputMode="numberic" />
                        <div
                            onClick={() => this.handleUpdateCart(item.product.id, + item.quantity + 1)}
                            className="inc qtybutton">+</div>
                    </div>
                </td>
                <td className="nowrap-text">{formatNumber(item.product.PriceNew)} đ</td>
                <td className="nowrap-text nowrap-text--color">
                    {this.cartTotal(item.product.PriceNew, item.quantity)} đ
                </td>
                <td style={{ textAlign: 'center' }}>
                    <button
                        onClick={() => this.handleDeleteCart(item.product.id)}
                        type="button"
                        className="btn__del-cart">
                        <i className="fas fa-trash" />
                    </button>
                </td>
            </tr>
        );
    }



}

export default CartItem;