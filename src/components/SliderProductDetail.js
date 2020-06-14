import React, { Component } from 'react';

class SliderProductDetail extends Component {
    render() {
        return (
            <div className="col l-6 m-12 c-12">
                <div className="slick__large-img mb-1">
                    <div className="slick__large-img-item">
                        <img src="./images/2.png" alt="image1" />
                    </div>
                    <div className="slick__large-img-item">
                        <img src="./images/3.png" alt="image1" />
                    </div>
                    <div className="slick__large-img-item">
                        <img src="./images/4.png" alt="image1" />
                    </div>
                    <div className="slick__large-img-item">
                        <img src="./images/5.png" alt="image1" />
                    </div>
                    <div className="slick__large-img-item">
                        <img src="./images/6.png" alt="image1" />
                    </div>
                </div>
                <div className="slick__thumb">
                    <div className="slick__thumb-img">
                        <div className="slick__thumb-img-item">
                            <img src="./images/2.png" alt="image1" />
                        </div>
                        <div className="slick__thumb-img-item">
                            <img src="./images/3.png" alt="image1" />
                        </div>
                        <div className="slick__thumb-img-item">
                            <img src="./images/4.png" alt="image1" />
                        </div>
                        <div className="slick__thumb-img-item">
                            <img src="./images/5.png" alt="image1" />
                        </div>
                        <div className="slick__thumb-img-item">
                            <img src="./images/6.png" alt="image1" />
                        </div>
                    </div>
                    <div className="btn__thumb-item btn__prev--detail">
                        <i className="fal fa-chevron-left" />
                    </div>
                    <div className="btn__thumb-item btn__next--detail">
                        <i className="fal fa-chevron-right" />
                    </div>
                </div>
            </div>
        );
    }
}

export default SliderProductDetail;