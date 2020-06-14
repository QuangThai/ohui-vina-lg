import React, { Component, Fragment } from 'react';

import HeaderCartContainer from '../../containers/HeaderCartContainer';
import CartContainer from '../../containers/CartContainer';
import Footer from '../../components/Footer';

class CartPage extends Component {
    render() {
        return (
            <Fragment>

                <HeaderCartContainer />

                <CartContainer />

                <Footer />
                <a id="back-to-top" href="javascript" className="back-to-top">
                    <i className="fal fa-chevron-up back-to-top__icon" aria-hidden="true"></i>
                </a>
            </Fragment>
        );
    }
}

export default CartPage;