
import React, { Fragment } from 'react';
import HeaderCartContainer from '../../containers/HeaderCartContainer';
import Category from '../../components/Category';
import ProductContainer from '../../containers/ProductContainer';
import Footer from '../../components/Footer';
import MessageContainer from '../../containers/MessageContainer';
function App() {
    return (
        <Fragment>
            <HeaderCartContainer />
            <MessageContainer/>
            <main className="main">
                <div id="product" className="product">
                    <div className="grid wide">
                        <div className="row">
                            <Category />
                            <ProductContainer />
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </Fragment>
    );
}

export default App;