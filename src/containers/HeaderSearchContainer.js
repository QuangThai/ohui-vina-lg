import React, { Component } from 'react';
import { connect } from 'react-redux';
import HeaderSearch from '../components/HeaderSearch';
import { actSearch } from '../actions/index';

class HeaderSearchContainer extends Component {

    render() {
        return (
            <HeaderSearch onSearch={this.props.onSearch} />
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSearch: (keyword) => {
            dispatch(actSearch(keyword));
        }
    }
}

export default connect(null, mapDispatchToProps)(HeaderSearchContainer);