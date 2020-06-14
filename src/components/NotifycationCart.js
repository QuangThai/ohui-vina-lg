
import React, { Component } from 'react';

class NotifycationCart extends Component {

    render() {
        let { message } = this.props;
        return (
            <div className={message === true ? 'Notifycation js-noti is--active' : 'Notifycation js-not'}>
                <div className="Notifycation__content js-Notifycation__content">
                    Sản phẩm đã được thêm vào giỏ hàng
                </div>
            </div>
        );
    }
}


export default NotifycationCart;
