import React, { Component } from 'react';
import { connect } from 'react-redux';
import Products from '../components/Products';
import ProductItem from '../components/ProductItem';
import { actAddToCart, actFetchProductsRequest, actMessageOpen, actMessageClose } from '../actions/index';

class ProductContainer extends Component {

    // fetch products from the API
    componentDidMount() {
        this.props.handleFetchProductsRequest();
    }

    render() {
        let { products, keyword, sort } = this.props;

        // search
        products = products.filter((product) => {
            return product.name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1
        });

        // sort
        products.sort((a, b) => {
            if (a.status > b.status) return -sort.value;
            else if (a.status < b.status) return sort.value;
            else return 0;
        });

        return (
            <Products>
                {this.showProducts(products)}
            </Products>
        );
    }

    // show products ( mapping productItem )
    showProducts = (products) => {
        let result = null;
        if (products.length > 0) {
            result = products.map((product, index) => {
                return <ProductItem
                    key={index}
                    product={product}
                    addToCart={this.props.addToCart}
                    onMessageOpen={this.props.onMessageOpen}
                    onMessageClose={this.props.onMessageClose}
                />
            });
        }
        return result;
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.products.currentProduct,
        keyword: state.products.searchValue,
        sort: state.products.sort
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleFetchProductsRequest: () => {
            dispatch(actFetchProductsRequest());
        },
        addToCart: (product) => {
            dispatch(actAddToCart(product, 1));
        },
        onMessageOpen: () => {
            dispatch(actMessageOpen())
        },
        onMessageClose: () => {
            setTimeout(() => {
                dispatch(actMessageClose());
            }, 1500);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductContainer);



