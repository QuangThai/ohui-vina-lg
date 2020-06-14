import React from 'react';
import HomePage from './pages/HomePage/HomePage';
import CartPage from './pages/CartPage/CartPage';
import ProductDetail from './pages/ProductDetail/ProductDetail';
const routers = [
    {
        path: '/',
        exact: true,
        main: () => <HomePage />
    },
    {
        path: '/cart',
        exact: true,
        main: () => <CartPage />
    },
    {
        path: '/productDetail/:name/:id',
        exact: true,
        main: ({match}) => <ProductDetail match={match} />
    },
];

export default routers;