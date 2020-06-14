import React, { Component } from 'react';

class SortMobile extends Component {

    onFilterMobile = (sortBy, sortValue) => {
        this.props.onSortFilterMobile({
            by: sortBy,
            value: sortValue
        });
    }

    render() {
        let { sort } = this.props;

        //header__sort-item header__sort-item--active
        return (
            <ul className="header__sort-bar">
                <li className={(sort.by === 'status' && sort.value === 1) ? 'header__sort-item header__sort-item--active' : 'header__sort-item'}>
                    <a href="#!" onClick={() => this.onFilterMobile('status', 1)} className="header__sort-link">Liên quan</a>
                </li>
                <li className={(sort.by === 'status' && sort.value === 0) ? 'header__sort-item header__sort-item--active' : 'header__sort-item'}>
                    <a href="#!" onClick={() => this.onFilterMobile('status', 0)} className="header__sort-link">Mới nhất</a>
                </li>
                <li className={(sort.by === 'status' && sort.value === -1) ? 'header__sort-item header__sort-item--active' : 'header__sort-item'}>
                    <a href="#!" onClick={() => this.onFilterMobile('status', -1)} className="header__sort-link">Bán chạy</a>
                </li>
                <li className="header__sort-item">
                    <a href="#!" className="header__sort-link">Giá</a>
                </li>
            </ul>
        );
    }
}

export default SortMobile;