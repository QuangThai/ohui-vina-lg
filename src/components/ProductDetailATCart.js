import React, { Component } from 'react';

class ProductDetailATCart extends Component {
    render() {
        return (
            <div className="col l-6 m-12 c-12 product__detail-wrap">
                <div className="product__detail-inner">
                    <div className="product__detail-name">
                        <h3>Bộ sản phẩm chống nắng Ohui Dayshield Smart Pumping Foundation Cushion Special Set
            </h3>
                    </div>
                    <div className="product__detail-price">
                        <del>2.150.000đ</del>
                        <ins>1.150.000đ</ins>
                    </div>
                    <div className="product__detail-brief">
                        <span className="product__detail-brief-label">Thông tin</span>
                        <p className="product__detail-brief-infor">Kem chống nhăn Ohui Age Recovery Wrinkle được
                        mệnh
                        danh là “bàn ủi nếp nhăn” với thành phần botox thực vật giúp làm phẳng các nếp nhăn
                        sâu,
                        chống thâm quầng mắt, xoá tan bọng mỡ quanh mắt, làm trẻ hoá và sáng mịn da vùng
                        mắt.
              Ngay khi tiếp xúc với da, kem chống nhăn sẽ tác động tích cực vào các nếp</p>
                    </div>
                    <div className="product__detail-quantity">
                        <span>Số lượng</span>
                        <div className="cart-plus-minus">
                            <div className="dec qtybutton">-</div>
                            <input type="number" className="cart-plus-minus-box" defaultValue={1} inputMode="numberic" />
                            <div className="inc qtybutton">+</div>
                        </div>
                    </div>
                    <div className="product__detail-cart">
                        <button className="product__detail-cart-btn product__detail-cart-btn--cart"><i className="fal fa-shopping-cart" /> Thêm vào giỏ hàng</button>
                        <button className="product__detail-cart-btn">Mua ngay</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductDetailATCart;