import React, { Component } from 'react';

class product extends Component {
    render() {
        return (
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                <div className="thumbnail">
                    <img src={this.props.img} alt={this.props.name}></img>
                    <div className="caption">
                        <h3>{this.props.name}</h3>
                        <p>{this.props.title}</p>
                        <strong>{this.props.price} đ</strong>
                        <p>
                            <a href="https://reactjs.org/" className="btn btn-primary">Xem chi tiết</a>
                            <a href="https://reactjs.org/" className="btn btn-default">Thêm vào giỏ</a>
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default product;