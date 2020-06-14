import React, { Component, Fragment } from 'react';

import HeaderCartContainer from '../../containers/HeaderCartContainer';
import Footer from '../../components/Footer';
import ProductDetail from '../../components/ProductDetail';

class CartPage extends Component {
    render() {
        let { match } = this.props;
        return (
            <Fragment>

                <HeaderCartContainer />

                <ProductDetail match={match}/>

                <Footer />
                
                <a id="back-to-top" href="javascript" className="back-to-top">
                    <i className="fal fa-chevron-up back-to-top__icon" aria-hidden="true"></i>
                </a>
            </Fragment>
        );
    }
}

export default CartPage;