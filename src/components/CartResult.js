import React, { Component } from 'react';
import { formatNumber } from '../pipes/priceFormatter';
class CartResult extends Component {

    deleteAllCart = (cart) => {        
        if (typeof (cart) !== "undefined") {
            localStorage.clear();
        }
    }

    render() {        
        let { cart } = this.props;
        return (
            <tr>
                <td colSpan={4} className="total__cart">Tổng tiền</td>
                <td className="total__cart nowrap-text--color total__cart--number">{formatNumber(this.showTotalAmount(cart))} đ</td>
                <td>
                    <button
                        onClick={() => this.deleteAllCart(cart)}
                        className="btn__del-cart btn__del-cart--all">
                        <i className="fas fa-trash" /> Xóa
                        giỏ hàng
                    </button>
                </td>
            </tr>
        );
    }

    // tổng tiền
    showTotalAmount = (cart) => {
        let total = 0;
        for (let item of cart) {
            total += (item.product.PriceNew * item.quantity);
        }
        return total
    }
}

export default CartResult;