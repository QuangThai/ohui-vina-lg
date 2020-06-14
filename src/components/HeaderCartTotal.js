import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { formatNumber } from '../pipes/priceFormatter';
class HeaderCartTotal extends Component {

    render() {
        let { cart } = this.props;

        return (
            <div className="header__notify-cart__total">
                <span>Tổng tiền :</span>
                <span>{formatNumber(this.showTotalAmount(cart))}đ</span>
                <Link to='./cart' className="header__notify-wrap-btn">Xem giỏ hàng</Link>
            </div>
        );
    }

    showTotalAmount = (cart) => {
        let total = 0;
        for (let item of cart) {
            total += (item.product.PriceNew * item.quantity);
        }
        return total;
    }
}

export default HeaderCartTotal;