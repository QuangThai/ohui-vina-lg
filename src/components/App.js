import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Spinner from '../components/Spinner';
import routers from '../routers-config';

class App extends Component {
    render() {
        const { loading, products } = this.props;
        return (loading && products.length === 0) ? <Spinner /> : (
            <Router>
                <Fragment>
                    {showRoutes(routers)}
                </Fragment>
            </Router>
        )
    }
}

const showRoutes = (routers) => {
    let result = null;
    if (routers.length > 0) {
        result = routers.map((route, index) => {
            return <Route
                path={route.path}
                exact={route.exact}
                component={route.main}
                key={index} />
        });
    }
    return <Switch>{result}</Switch>
}


const mapStateToProps = (state) => {
    return {
        loading: state.products.isLoading,
        products: state.products.currentProduct
    };
}


export default connect(mapStateToProps, null)(App);
