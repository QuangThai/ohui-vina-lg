import React, { Component } from 'react';

class SortItem extends Component {
    handleSortStatus = (sortBy, sortValue) => {
        this.props.onSortFilter({
            by: sortBy,
            value: sortValue
        });
    }

    // home__filter-btn-item active
    render() {
        let { sort } = this.props;
        return (
            <div className="home__filter-btn">
                <button
                    onClick={() => this.handleSortStatus('status', 1)}
                    className={(sort.by === 'status' && sort.value === 1) ? 'home__filter-btn-item active' : 'home__filter-btn-item'}>Phổ biến
                </button>
                <button
                    onClick={() => this.handleSortStatus('status', 0)}
                    className={(sort.by === 'status' && sort.value === 0) ? 'home__filter-btn-item active' : 'home__filter-btn-item'}>Mới nhất
                   </button>
                <button
                    onClick={() => this.handleSortStatus('status', -1)}
                    className={(sort.by === 'status' && sort.value === -1) ? 'home__filter-btn-item active' : 'home__filter-btn-item'}>Bán chạy
                   </button>
                <div className="select__orderby select__orderby--min-width">
                    <div className="select__item select__item--height">
                        <span className="select__price select__price--size">Giá</span>
                        <span><i className="fal fa-chevron-down select__item--icon" /></span>
                    </div>
                    <div className="select__item-dropdown">
                        <div className="select__item-dropdown-status">
                            <a href="#!" onClick={this.handleSortPrice} className="select__item-link">Giá: Thấp đến Cao</a>
                            <svg className="tickid-svg-icon tickid-svg-icon--active " enableBackground="new 0 0 12 12" viewBox="0 0 12 12" x={0} y={0}>
                                <g>
                                    <path d="m5.2 10.9c-.2 0-.5-.1-.7-.2l-4.2-3.7c-.4-.4-.5-1-.1-1.4s1-.5 1.4-.1l3.4 3 5.1-7c .3-.4 1-.5 1.4-.2s.5 1 .2 1.4l-5.7 7.9c-.2.2-.4.4-.7.4 0-.1 0-.1-.1-.1z">
                                    </path>
                                </g>
                            </svg>
                        </div>
                        <div className="select__item-dropdown-status">
                            <a href="#!" className="select__item-link">Giá: Cao đến Thấp</a>
                            <svg className="tickid-svg-icon" enableBackground="new 0 0 12 12" viewBox="0 0 12 12" x={0} y={0}>
                                <g>
                                    <path d="m5.2 10.9c-.2 0-.5-.1-.7-.2l-4.2-3.7c-.4-.4-.5-1-.1-1.4s1-.5 1.4-.1l3.4 3 5.1-7c .3-.4 1-.5 1.4-.2s.5 1 .2 1.4l-5.7 7.9c-.2.2-.4.4-.7.4 0-.1 0-.1-.1-.1z">
                                    </path>
                                </g>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SortItem;