import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actSort } from '../actions/index';
import SortItem from '../components/SortItem';


class SortContainer extends Component {
    render() {
        let { sort } = this.props;
        return (
            <SortItem
                sort={sort}
                onSortFilter={this.props.onSortFilter} />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        sort: state.products.sort
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onSortFilter: (sort) => {
            dispatch(actSort(sort));
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SortContainer);