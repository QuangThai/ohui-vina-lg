import React, { Component } from 'react';

class Category extends Component {
    render() {
        return (
            <div className="col l-2 hide-on-mobile-tablet">
                <div className="category">
                    <div className="category__title">
                        <h4 className="category__title-name">
                            {/* <i className="fal fa-list category__title-icon" /> */}
                            Danh mục
                        </h4>
                    </div>
                    <div className="category__all-product">
                        <a href="#!" className="category__list-link category__list-link--active">Tất cả sản
              phẩm</a>
                    </div>
                    <ul className="category__list">
                        <li className="category__list-item category__list-item--has-children">
                            <a href="#!" className="category__list-link">Ohui  <i className="fal fa-chevron-right" /></a>

                            <ul className="category__list category__list--chilren">
                                <li className="category__list-item">
                                    <a href="#!" className="category__list-link">Ohui Thefirst Tái Sinh</a>
                                </li>
                                <li className="category__list-item">
                                    <a href="#!" className="category__list-link">Ohui Dưỡng Trắng</a>
                                </li>
                                <li className="category__list-item">
                                    <a href="#!" className="category__list-link">Ohui Prime Advancer</a>
                                </li>
                                <li className="category__list-item">
                                    <a href="#!" className="category__list-link">Ohui Dưỡng Ẩm</a>
                                </li>
                                <li className="category__list-item">
                                    <a href="#!" className="category__list-link">Ohui Chống Lão Hóa</a>
                                </li>
                                <li className="category__list-item">
                                    <a href="#!" className="category__list-link">Ohui Make Up</a>
                                </li>
                                <li className="category__list-item">
                                    <a href="#!" className="category__list-link">Ohui Chống Nắng</a>
                                </li>
                            </ul>
                        </li>
                        <li className="category__list-item category__list-item--has-children">
                            <a href="#!" className="category__list-link">Whoo <i className="fal fa-chevron-right" /></a>
                            <ul className="category__list">
                                <li className="category__list-item">
                                    <a href="#!" className="category__list-link">Whoo Bichup</a>
                                </li>
                                <li className="category__list-item">
                                    <a href="#!" className="category__list-link">Whoo Dưỡng Ẩm</a>
                                </li>
                                <li className="category__list-item">
                                    <a href="#!" className="category__list-link">Whoo Dưỡng Trắng Trị Nám</a>
                                </li>
                                <li className="category__list-item">
                                    <a href="#!" className="category__list-link">Whoo Make Up</a>
                                </li>
                                <li className="category__list-item">
                                    <a href="#!" className="category__list-link">Whoo Tái Sinh</a>
                                </li>
                                <li className="category__list-item">
                                    <a href="#!" className="category__list-link">Whoo Chống Nắng</a>
                                </li>
                                <li className="category__list-item">
                                    <a href="#!" className="category__list-link">Whoo Spa</a>
                                </li>
                                <li className="category__list-item">
                                    <a href="#!" className="category__list-link">Whoo Chống Lão Hóa</a>
                                </li>
                                <li className="category__list-item">
                                    <a href="#!" className="category__list-link">Whoo Hoàn Lưu Cao</a>
                                </li>
                            </ul>
                        </li>
                        <li className="category__list-item category__list-item--has-children">
                            <a href="#!" className="category__list-link">Su:m37 <i className="fal fa-chevron-right" /></a>
                            <ul className="category__list">
                                <li className="category__list-item">
                                    <a href="#!" className="category__list-link">Su:m37 Tái Sinh</a>
                                </li>
                                <li className="category__list-item">
                                    <a href="#!" className="category__list-link">Sm:m37 Chống Lão Hóa </a>
                                </li>
                                <li className="category__list-item">
                                    <a href="#!" className="category__list-link">Sm:m37 Dưỡng Trắng </a>
                                </li>
                                <li className="category__list-item">
                                    <a href="#!" className="category__list-link">Su:m37 cấp ẩm water full </a>
                                </li>
                                <li className="category__list-item">
                                    <a href="#!" className="category__list-link">Su:m37 Làm Sạch </a>
                                </li>
                                <li className="category__list-item">
                                    <a href="#!" className="category__list-link">Su:m37  Chống Nắng Sun Away</a>
                                </li>
                                <li className="category__list-item">
                                    <a href="#!" className="category__list-link">Su:m37 Make Up</a>
                                </li>
                            </ul>
                        </li>
                        <li className="category__list-item category__list-item--has-children">
                            <a href="#!" className="category__list-link">Set mini <i className="fal fa-chevron-right" /></a>
                            <ul className="category__list">
                                <li className="category__list-item">
                                    <a href="#!" className="category__list-link">Set Ohui Mini</a>
                                </li>
                                <li className="category__list-item">
                                    <a href="#!" className="category__list-link">Set Whoo Mini </a>
                                </li>
                                <li className="category__list-item">
                                    <a href="#!" className="category__list-link">Set Su:m37 Mini </a>
                                </li>
                            </ul>
                        </li>
                        <li className="category__list-item">
                            <a href="#!" className="category__list-link">Thực phẩm chức năng</a>
                        </li>
                        <li className="category__list-item">
                            <a href="#!" className="category__list-link">Dịch vụ</a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Category;