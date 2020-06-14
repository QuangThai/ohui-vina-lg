import React, { Component } from 'react';
import SliderProductDetail from './SliderProductDetail';
import ProductDetailATCart from './ProductDetailATCart';

class ProductDetail extends Component {
    render() {
  
        return (
            <main className="main">
                <section className="product__detail">
                    <div className="grid wide">
                        <div className="breadcrumb__container">
                            <ol className="breadcrumb__list">
                                <li className="breadcrumb__item">
                                    <a href="index.php" className="breadcrumb__link">trang chủ</a>
                                </li>
                                <li className="breadcrumb__item breadcrumb__item--active ">Chi tiết sản phẩm</li>
                            </ol>
                        </div>
                        <div className="row">
                            <SliderProductDetail />
                            <ProductDetailATCart />
                        </div>
                    </div>
                </section>
            </main>
        );
    }
}

export default ProductDetail;