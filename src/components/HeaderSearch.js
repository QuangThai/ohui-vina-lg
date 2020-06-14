import React, { Component } from 'react';
class HeaderSearch extends Component {

    constructor(props) {
        super(props);
        this.state = {
            keyword: '',
        }
    }

    onChange = (event) => {
        this.setState({
            keyword: event.target.value
        });
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onSearch(this.state.keyword)
    }

    render() {
        return (
            <form method="POST">
                <input type="text" onChange={this.onChange} value={this.state.keyword} className="form__search-text" name="keyword" placeholder="Tìm kiếm..." />
                <button
                    onClick={this.onSubmit}
                    type="submit"
                    className="form__search-btn">
                    <i className="fal fa-search" />
                </button>
                <div className="form__search-history">
                    <span className="form__search-history-label">Lịch sử tìm kiếm</span>
                    <div className="form__search-history-list">
                        <div className="form__search-history-item">
                            <a href="#!" className="form__search-history-link">
                                {this.state.keyword}
                            </a>
                        </div>
                    </div>
                </div>
            </form>
        );
    }
}

export default HeaderSearch;