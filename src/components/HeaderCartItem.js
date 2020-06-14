import React, { Component } from 'react';
import { formatNumber } from '../pipes/priceFormatter';
class HeaderCartItem extends Component {

    handleDeleteCart = id => {
        this.props.handleDeleteCart(id);
    }

    render() {
        let { item } = this.props;
        return (
            <div className="header__notify-inner">
                <div className="header__notify-image-product">
                    <img src={item.product.image} alt="" />
                </div>
                <div className="header__notify-content">
                    <div className="header__notify-content-name">
                        {item.product.name}
                    </div>
                    <div className="header__notify-content-price">{formatNumber(item.product.PriceNew)}đ
                        <span className="header__notify-content-multipy">x</span>
                        <span className="header__notify-content-quantity">{item.quantity}</span>
                    </div>
                </div>
                <button onClick={() => this.handleDeleteCart(item.product.id)}
                    className="btn__del-cart header__notify-content-btn">Xóa
                </button>
            </div>
        );
    }
}

export default HeaderCartItem;