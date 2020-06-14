import React, { Component } from 'react';

class CartTable extends Component {
    render() {
        return (
            <table className="table" id="Cart">
                <thead>
                    <tr>
                        <th>Tên sản phẩm</th>
                        <th>Hình ảnh</th>
                        <th>Số lượng</th>
                        <th>Giá</th>
                        <th>Thành tiền</th>
                        <th>Thao tác</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.children}
                </tbody>
            </table>
            /*  */

        );
    }
}

export default CartTable;