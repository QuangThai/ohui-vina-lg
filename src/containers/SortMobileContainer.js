import React, { Component } from 'react';
import { connect } from 'react-redux';
import SortMobile from '../components/SortMobile';
import { actSortMobile } from '../actions';

class SortMobileContainer extends Component {
    render() {
        let { sort } = this.props;   
        return (
            <SortMobile sort={sort} onSortFilterMobile={this.props.onSortFilterMobile} />
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
        onSortFilterMobile: (sort) => {
            dispatch(actSortMobile(sort))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SortMobileContainer);