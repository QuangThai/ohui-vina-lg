import React, { Component } from 'react';


class HeaderCart extends Component {

    render() {
        let { cart } = this.props;
        if (cart.length === 0) {
            return (
                <div className="header__notify-item header__notify-item--no-product">
                    <img src="./images/no-cart.png" alt="image_noti" className="header__notify-image header__notify-image--no-product" />
                    <p className="header__notify-text header__notify-text--no-product">Chưa có sản phẩm</p>
                </div>
            )
        }
        else {
            return (
                <div className="header__notify-item">
                    <div className="header__notify-wrap">
                        <div className="header__notify-title">Sản phẩm đã thêm</div>
                        <div className="header__notify-wrap-list">
                            {this.props.children}
                        </div>
                    </div>
                </div>
            );
        }
    }
}

export default HeaderCart;