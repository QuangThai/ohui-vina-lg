import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import Sort from './Sort';

class Products extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentPage: 1,
            productsPerPage: 12
        }
    }

    renderProduct = (product) => {
        return product;
    }

    handleClick = (event) => {
        this.setState({
            currentPage: +event.target.id
        });
    }


    renderPageNumbers = (pageNumbers) => {
        let result = null;
        let active = '';
        if (pageNumbers !== undefined) {
            result = pageNumbers.map(number => {
                this.state.currentPage === number ? active = "active" : active = '';
                return <li className="pagination__item" key={number}>
                    <Link to='/' className={`pagination__link ${active}`} id={number} onClick={this.handleClick}>{number}</Link>
                </li>
            })
        }
        return result;
    }

    render() {

        const { currentPage, productsPerPage } = this.state;
        const product = this.props.children;
        const pageNumbers = [];

        // Logic for displaying todos
        if (product !== null) {
            const indexOfLastProduct = currentPage * productsPerPage;
            const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
            var currentProduct = product.slice(indexOfFirstProduct, indexOfLastProduct);

            // Logic for displaying page numbers
            for (let i = 1; i <= Math.ceil(product.length / productsPerPage); i++) {
                pageNumbers.push(i);
            }
        }
        return (
            <div className="col l-10">
                <Sort />

                <div className="row">
                    {/* {this.props.children} */}
                    {this.renderProduct(currentProduct)}
                </div>
                <div className="pagination">
                    <ul className="pagination__list">

                        {this.renderPageNumbers(pageNumbers)}

                    </ul>
                </div>
            </div>
        );
    }
}



export default (Products);