import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="footer__inner">
                    <div className="grid wide">
                        <div className="row">
                            <div className="col l-2-4 m-4 c-6 ">
                                <div className="footer__item">
                                    <div className="footer__menu-title">Chăm sóc khách hàng</div>
                                    <ul className="footer__menu-list">
                                        <li className="footer__menu-item">
                                            <a href="#!" className="footer__menu-link">Trung tâm trợ giúp</a>
                                        </li>
                                        <li className="footer__menu-item">
                                            <a href="#!" className="footer__menu-link">Phản hồi khách hàng</a>
                                        </li>
                                        <li className="footer__menu-item">
                                            <a href="#!" className="footer__menu-link">Hướng dẫn mua hàng</a>
                                        </li>
                                        <li className="footer__menu-item">
                                            <a href="#!" className="footer__menu-link">Trả hàng &amp; Hoàn tiền</a>
                                        </li>
                                        <li className="footer__menu-item">
                                            <a href="#!" className="footer__menu-link">Thanh toán</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col l-2-4 m-4 c-6 ">
                                <div className="footer__item">
                                    <div className="footer__menu-title">Về chúng tôi</div>
                                    <ul className="footer__menu-list">
                                        <li className="footer__menu-item">
                                            <a href="#!" className="footer__menu-link">Giới thiệu về shopee Việt Nam</a>
                                        </li>
                                        <li className="footer__menu-item">
                                            <a href="#!" className="footer__menu-link">Tuyển dụng</a>
                                        </li>
                                        <li className="footer__menu-item">
                                            <a href="#!" className="footer__menu-link">Điều khoản shop</a>
                                        </li>
                                        <li className="footer__menu-item">
                                            <a href="#!" className="footer__menu-link">Kênh Người bán</a>
                                        </li>
                                        <li className="footer__menu-item">
                                            <a href="#!" className="footer__menu-link">Flash Sales</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col l-2-4 m-4 c-6 ">
                                <div className="footer__item">
                                    <div className="footer__menu-title">Danh Mục</div>
                                    <ul className="footer__menu-list">
                                        <li className="footer__menu-item">
                                            <a href="#!" className="footer__menu-link">Ohui</a>
                                        </li>
                                        <li className="footer__menu-item">
                                            <a href="#!" className="footer__menu-link">Whoo</a>
                                        </li>
                                        <li className="footer__menu-item">
                                            <a href="#!" className="footer__menu-link">Su:m37</a>
                                        </li>
                                        <li className="footer__menu-item">
                                            <a href="#!" className="footer__menu-link">Set Mini</a>
                                        </li>
                                        <li className="footer__menu-item">
                                            <a href="#!" className="footer__menu-link">Thực phẩm chức năng</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col l-2-4 m-4 c-6 ">
                                <div className="footer__item">
                                    <div className="footer__menu-title">Theo dõi chúng tôi trên</div>
                                    <ul className="footer__menu-list">
                                        <li className="footer__menu-item">
                                            <a href="#!" className="footer__menu-link"><i className="fab fa-facebook" /> Facebook</a>
                                        </li>
                                        <li className="footer__menu-item">
                                            <a href="#!" className="footer__menu-link"><i className="fab fa-instagram " /> Instagram</a>
                                        </li>
                                        <li className="footer__menu-item">
                                            <a href="#!" className="footer__menu-link"><i className="fab fa-twitter" /> Twitter</a>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                            <div className="col l-2-4 m-4 c-6 hide-on-mobile">
                                <div className="footer__item">
                                    <div className="footer__menu-title">Vào cửa hàng trên ứng dụng</div>
                                    <div className="footer__store">
                                        <a href="#!" className="footer__store-link">
                                            <img src="./images/footer_qr.png" alt="" className="footer__store-link-qr" />
                                            <div className="footer__store-link-item">
                                                <img src="./images/footer_app_store.png" alt="" className="footer__store-link-app" />
                                                <img src="./images/footer-gg-play.png" alt="" className="footer__store-link-app" />
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer__policy">
                        <div className="footer__policy-list">
                            <div className="footer__policy-item">
                                <a href="#!" className="footer__policy-link">Chính sách bảo mật</a>
                            </div>
                            <div className="footer__policy-item">
                                <a href="#!" className="footer__policy-link">Quy chế hoạt động</a>
                            </div>
                            <div className="footer__policy-item">
                                <a href="#!" className="footer__policy-link">Chính sách vận chuyển</a>
                            </div>
                            <div className="footer__policy-item">
                                <a href="#!" className="footer__policy-link">Chính sách trả hàng và hoàn tiền</a>
                            </div>
                        </div>
                        <div className="footer__image-item">
                            <a href="#!" className="footer__image-link">
                                <div className="footer__image" />
                            </a>
                        </div>
                        <div className="footer__copy-right">
                            <i className="fal fa-copyright" /> 2020 Mỹ Phẩm Ohui - LG Vina
                  - 63 Lê Văn Lương, Trung Hòa, Cầu Giấy, Hà Nội
                </div>
                    </div>
                </div>

                <a id="back-to-top" href="#!" className="back-to-top">
                    <i className="fal fa-chevron-up back-to-top__icon" aria-hidden="true"></i>
                </a>
            </footer>

        );
    }
}

export default Footer;