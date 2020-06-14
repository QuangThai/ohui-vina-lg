import React, { Component } from 'react';

class Pagination extends Component {

    render() {
        return (
            <div className="pagination">
                <ul className="pagination__list">
                    <li className="pagination__item">
                        <a href="javascript" className="pagination__link"><i className="fal fa-chevron-left" /></a>
                    </li>
                    <li className="pagination__item">
                        <a href="javascript" className="pagination__link pagination__link--active">1</a>
                    </li>
                    <li className="pagination__item">
                        <a href="javascript" className="pagination__link">2</a>
                    </li>
                    <li className="pagination__item">
                        <a href="javascript" className="pagination__link">3</a>
                    </li>
                    <li className="pagination__item">
                        <a href="javascript" className="pagination__link">4</a>
                    </li>
                    <li className="pagination__item">
                        <a href="javascript" className="pagination__link">5</a>
                    </li>
                    <li className="pagination__item">
                        <a href="javascript" className="pagination__link">...</a>
                    </li>
                    <li className="pagination__item">
                        <a href="javascript" className="pagination__link">14</a>
                    </li>
                    <li className="pagination__item">
                        <a href="javascript" className="pagination__link"><i className="fal fa-chevron-right" /></a>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Pagination;