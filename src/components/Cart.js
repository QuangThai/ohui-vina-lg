import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Cart extends Component {
    render() {
        return (
            <main className="main">
                <section className="product__detail">
                    <div className="grid wide">
                        <div className="breadcrumb__container">
                            <ol className="breadcrumb__list">
                                <li className="breadcrumb__item">
                                    <Link to="/" className="breadcrumb__link">trang chủ</Link>
                                </li>
                                <li className="breadcrumb__item breadcrumb__item--active ">Giỏ hàng</li>
                            </ol>
                        </div>
                        <div className="table-scroll" style={{ overflowX: 'auto' }} id="listCart">
                            {this.props.children}
                        </div>
                        <div className="cart__info-continute">
                            <Link to="/" className="btn__del-cart btn__del-cart--all btn__del-cart--continute">
                                <i className="far fa-long-arrow-left" /> Tiếp tục mua hàng
                            </Link>
                            <a href="javascript" className="btn__del-cart btn__del-cart--all btn__del-cart--pay">
                                <i className="fal fa-money-bill-wave" /> Thanh toán
                            </a>
                        </div>
                    </div>
                </section>
            </main>
        );
    }
}

export default Cart;