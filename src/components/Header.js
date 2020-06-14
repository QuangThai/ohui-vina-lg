import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import HeaderSearchContainer from '../containers/HeaderSearchContainer';
import SortMobileContainer from '../containers/SortMobileContainer';
class Header extends Component {

    render() {
        let { cart } = this.props;
        return (
            <header className="header">
                <div className="shopping__cart--scroll">
                    <div className="shopping__cart shopping__cart--fixed ">
                        <div className="shopping__cart-icon shopping__cart-icon--hover">
                            <i className="fal fa-shopping-cart" />
                            <span className="number__cart">{cart.length}</span>
                        </div>
                        <div className="header__notify header__notify--cart">
                            {this.props.children}
                        </div>
                    </div>
                </div>
                <div className="header__top">
                    <div className="grid wide">
                        <nav className="header__navbar hide-on-mobile-tablet">
                            <ul className="header__list">
                                <li className="header__list-item header__list-link--hover">
                                    <a href="#!" className="header__list-link header__list-link--border">Vào cửa hàng trên ứng dụng MyOhui</a>
                                    <div className="header__qr">
                                        <a href="#!" className="header__qr-link">
                                            <img src="./images/qr-code2.png" alt="" className="header__qr-image" />
                                            <div className="qr__apps">
                                                <img src="./images/google-store.png" alt="" className="header__qr-image-item" />
                                                <img src="./images/app-store.png" alt="" className="header__qr-image-item" />
                                            </div>
                                        </a>
                                    </div>
                                </li>
                                <li className="header__list-item">
                                    <a href="tel:0965866851" className="header__list-link header__list-link--border">
                                        <i className="fas fa-phone-alt header__list-icon--margin" /> 0965866851</a>
                                </li>
                                <li className="header__list-item">
                                    <a href="mailto:ohuiha.com@gmail.com" target="_blank_" className="header__list-link">
                                        <i className="fas fa-envelope header__list-icon--margin" /> Ohuiha.com@gmail.com</a>
                                </li>
                            </ul>
                            <ul className="header__list">
                                <li className="header__list-item header__list-link--notify">
                                    <a href="#!" className="header__list-link "><i className="fal fa-bell header__list-icon header__list-icon--margin" />
                  Thông Báo</a>
                                    <div className="header__notify header__notify-height header__notify--cart">
                                        <div className="header__notify-item">
                                            <img src="./images/notify.png" alt="" className="header__notify-image" />
                                            <p className="header__notify-text">Đăng nhập để xem Thông báo</p>
                                        </div>
                                        <div className="header__notify-form">
                                            <a href="#!" className="header__notify-btn header__notify-btn--register">Đăng ký</a>
                                            <a href="#!" className="header__notify-btn header__notify-btn--login">Đăng nhập</a>
                                        </div>
                                    </div>
                                </li>
                                <li className="header__list-item header__list-item--margin-right">
                                    <a href="#!" className="header__list-link"><i className="fal fa-question-circle header__list-icon header__list-icon--margin" />
                  Trợ Giúp</a>
                                </li>
                                <li className="header__list-item">
                                    <a href="#!" className="header__list-link header__list-link--strong header__list-link--border">Đăng Ký</a>
                                </li>
                                <li className="header__list-item  ">
                                    <a href="#!" className="header__list-link header__list-link--strong header__list-item--margin">Đăng Nhập</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div className="header__middle">
                    <div className="grid wide">
                        <div className="menu__siderbar">
                            <label className="header__icon-bars" htmlFor="nav__input">
                                <i className="fal fa-bars" />
                            </label>
                            <label className="header__icon-bars header__icon-bars--search" htmlFor="nav__search">
                                <i className="fal fa-search" />
                            </label>
                            <input type="checkbox" hidden id="nav__input" className="nav__input" />
                            <label htmlFor="nav__input" className="navbar__overlay" />
                            <nav className="navbar__mobile-wrapper">
                                <div className="navbar__mobile-list">
                                    <a href="#!" className="navbar__mobile-link">Tất cả sản phẩm</a>
                                </div>
                                <ul className="navbar__mobile-list">
                                    <li className="navbar__mobile-item">
                                        <a href="#!" className="navbar__mobile-link js-navbar">Ohui <i className="fal fa-angle-right"></i></a>
                                        <ul className="navbar__mobile-list navbar__mobile-list--hide">
                                            <li className="navbar__mobile-item">
                                                <a href="#!" className="navbar__mobile-link">Ohui Thefirst Tái Sinh </a>
                                            </li>
                                            <li className="navbar__mobile-item">
                                                <a href="#!" className="navbar__mobile-link">Ohui Dưỡng Trắng</a>
                                            </li>
                                            <li className="navbar__mobile-item">
                                                <a href="#!" className="navbar__mobile-link">Ohui Prime Advancer</a>
                                            </li>
                                            <li className="navbar__mobile-item">
                                                <a href="#!" className="navbar__mobile-link">Ohui Chống Lão Hóa</a>
                                            </li>
                                            <li className="navbar__mobile-item">
                                                <a href="#!" className="navbar__mobile-link">Ohui Dưỡng Ẩm</a>
                                            </li>
                                            <li className="navbar__mobile-item">
                                                <a href="#!" className="navbar__mobile-link">Ohui Make Up</a>
                                            </li>
                                            <li className="navbar__mobile-item">
                                                <a href="#!" className="navbar__mobile-link">Ohui Chống nắng</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="navbar__mobile-item ">
                                        <a href="#!" className="navbar__mobile-link js-navbar">Whoo <i className="fal fa-angle-right"></i></a>
                                        <ul className="navbar__mobile-list navbar__mobile-list--hide">
                                            <li className="navbar__mobile-item">
                                                <a href="#!" className="navbar__mobile-link">Whoo Bichup</a>
                                            </li>
                                            <li className="navbar__mobile-item">
                                                <a href="#!" className="navbar__mobile-link">Whoo Dưỡng Ẩm</a>
                                            </li>
                                            <li className="navbar__mobile-item">
                                                <a href="#!" className="navbar__mobile-link">Whoo Dưỡng Trắng Trị Nám</a>
                                            </li>
                                            <li className="navbar__mobile-item">
                                                <a href="#!" className="navbar__mobile-link">Whoo Make Up</a>
                                            </li>
                                            <li className="navbar__mobile-item">
                                                <a href="#!" className="navbar__mobile-link">Whoo Tái Sinh</a>
                                            </li>
                                            <li className="navbar__mobile-item">
                                                <a href="#!" className="navbar__mobile-link">Whoo Chống Nắng</a>
                                            </li>
                                            <li className="navbar__mobile-item">
                                                <a href="#!" className="navbar__mobile-link">Whoo Spa</a>
                                            </li>
                                            <li className="navbar__mobile-item">
                                                <a href="#!" className="navbar__mobile-link">Whoo Chống Lão Hóa</a>
                                            </li>
                                            <li className="navbar__mobile-item">
                                                <a href="#!" className="navbar__mobile-link">Whoo Hoàn Lưu cao</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="navbar__mobile-item ">
                                        <a href="#!" className="navbar__mobile-link js-navbar">Su:m37 <i className="fal fa-angle-right"></i></a>
                                        <ul className="navbar__mobile-list navbar__mobile-list--hide">
                                            <li className="navbar__mobile-item">
                                                <a href="#!" className="navbar__mobile-link">Su:m37 Tái Sinh</a>
                                            </li>
                                            <li className="navbar__mobile-item">
                                                <a href="#!" className="navbar__mobile-link">Sm:m37 Chống Lão Hóa </a>
                                            </li>
                                            <li className="navbar__mobile-item">
                                                <a href="#!" className="navbar__mobile-link">Sm:m37 Dưỡng Trắng </a>
                                            </li>
                                            <li className="navbar__mobile-item">
                                                <a href="#!" className="navbar__mobile-link">Su:m37 cấp ẩm water full </a>
                                            </li>
                                            <li className="navbar__mobile-item">
                                                <a href="#!" className="navbar__mobile-link">Su:m37 Làm Sạch </a>
                                            </li>
                                            <li className="navbar__mobile-item">
                                                <a href="#!" className="navbar__mobile-link">Su:m37  Chống Nắng Sun Away</a>
                                            </li>
                                            <li className="navbar__mobile-item">
                                                <a href="#!" className="navbar__mobile-link">Su:m37 Make Up</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="navbar__mobile-item ">
                                        <a href="#!" className="navbar__mobile-link js-navbar">Set Mini <i className="fal fa-angle-right"></i></a>
                                        <ul className="navbar__mobile-list navbar__mobile-list--hide">
                                            <li className="navbar__mobile-item">
                                                <a href="#!" className="navbar__mobile-link">Set Ohui Mini</a>
                                            </li>
                                            <li className="navbar__mobile-item">
                                                <a href="#!" className="navbar__mobile-link">Set Ohui Mini</a>
                                            </li>
                                            <li className="navbar__mobile-item">
                                                <a href="#!" className="navbar__mobile-link">Set Su:m37 Mini</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="navbar__mobile-item ">
                                        <a href="#!" className="navbar__mobile-link js-navbar">Thực phẩm chức năng</a>
                                    </li>
                                    <li className="navbar__mobile-item ">
                                        <a href="#!" className="navbar__mobile-link js-navbar">Dịch vụ</a>
                                    </li>
                                </ul>
                            </nav>
                            <div className="header__logo">
                                <Link to="/" className="logo__container">
                                    <img src="images/logo__mypham.png" alt="logo" />
                                </Link>
                            </div>
                            <input type="checkbox" hidden id="nav__search" className="nav__search" />
                            <div className="form__search">

                                <HeaderSearchContainer />

                                <div className="hot__words hide-on-mobile-tablet">
                                    <div className="hot__words-list">
                                        <div className="hot__words-item">
                                            <a href="#!" className="hot__words-link">Sữa rửa mặt</a>
                                            <a href="#!" className="hot__words-link">Set dưỡng ẩm</a>
                                            <a href="#!" className="hot__words-link">Bộ dưỡng ẩm</a>
                                            <a href="#!" className="hot__words-link">Kem đặc trị</a>
                                            <a href="#!" className="hot__words-link">Xịt khoáng nước</a>
                                            <a href="#!" className="hot__words-link">Set tinh chất</a>
                                            <a href="#!" className="hot__words-link">Son dưỡng môi</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="shopping__cart">
                                <div className="shopping__cart-icon shopping__cart-icon--hover">
                                    <i className="fal fa-shopping-cart" />
                                    <span className="number__cart">{cart.length}</span>
                                </div>
                                <div className="header__notify header__notify--cart">
                                    {this.props.children}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <SortMobileContainer />

            </header>
        );
    }
}

export default Header;