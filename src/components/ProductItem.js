
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { formatNumber} from '../pipes/priceFormatter';

class ProductItem extends Component {

    addToCart = (product) => {
        this.props.addToCart(product);
        this.props.onMessageOpen();
        this.props.onMessageClose();
    }

    // show rating
    showRating = (rating) => {
        let result = [];
        if (rating >= 0) {
            for (let i = 1; i <= rating; i++) {
                result.push(<i className="fas fa-star" key={'i' + i} />);
            }
            if (rating !== parseInt(rating)) {
                result.push(<i className="fas fa-star-half-alt" key={'rating' + rating} />);
            }
            for (let j = 1; j <= 5 - rating; j++) {
                result.push(<i className="far fa-star" key={'j' + j} />);
            }
        }
        return result
    }
    render() {
        let { product } = this.props;
        return (
            <div className="col l-3 m-4 c-6">
                <Link to="/" className="product__item">
                    <div className="product__image">
                        <img src={product.image} alt={product.name} />
                    </div>
                    <div className="product__content">
                        <div className="product__name">
                            {product.name}
                        </div>
                        <div className="product__price">
                            <del className="product__price-del">{formatNumber(product.priceOld)}đ</del>
                            <ins className="product__price-new">{formatNumber(product.PriceNew)}đ</ins>
                        </div>
                        <div className="product__heart">
                            <span><i className="fal fa-heart"></i></span>
                            <div className="product__header-star">
                                {this.showRating(product.rating)}
                            </div>
                        </div>
                        <div className="product__nation">
                            <span>{product.brand}</span>
                            <span>Hàn Quốc</span>
                        </div>
                    </div>
                    <div className="btn__cart-inner">
                        <button className="js-addToCart btn__cart-badge" onClick={() => this.addToCart(product)}>
                            <i className="far fa-shopping-cart"></i>
                        </button>
                    </div>
                    {/* <div className="product__favourite">
                        <i className="fal fa-check"></i>
                        <span>Yêu thích</span>
                    </div> */}
                    <div className="product__sale">
                        <span className="product__sale-percent">{product.percent}%</span>
                        <span className="product__sale-reduction">Giảm</span>
                    </div>
                </Link>
            </div>
        );
    }
}

export default ProductItem;