import React, { Component } from 'react';
import SortContainer from '../containers/SortContainer';

class Sort extends Component {
    
    render() {
        return (
            <div className="home__filter hide-on-mobile-tablet">
                <span className="home__filter-label">Sắp xếp theo</span>

                <SortContainer />

                <div className="home__filter-pagination">
                    <span className="label__pagination label__pagination--active">1/</span>
                    <span className="label__pagination">14</span>
                    <div className="filter-btn">
                        <a href="#!" className="filter-btn__item filter-btn__item--border"><i className="far fa-angle-left" /></a>
                        <a href="#!" className="filter-btn__item"><i className="far fa-angle-right" /></a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Sort;