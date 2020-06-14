import React, { Component } from 'react';
import { connect } from 'react-redux';
import NotifycationCart from '../components/NotifycationCart';


class MessageContainer extends Component {
    render() {
        let { messageCart } = this.props;
        return (
            <NotifycationCart message={messageCart} />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        messageCart: state.products.messageCart
    }
}


export default connect(mapStateToProps, null)(MessageContainer);