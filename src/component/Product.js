import React, { Component } from 'react';

class product extends Component {
    showDetail() {
        console.log(this.props.name + ' - ' + this.props.price + ' đ');
    }
    // Tạo Constructor (Cách 1)
    constructor(props) {
        super(props);
        this.showDetail = this.showDetail.bind(this); //Bắt buộc phải bind cho nó! không bind sẽ bị null => Error
    }

    //Cách 2 không cần bind cũng như constructor function, giúp giảm thiểu việc khai báo constructor và bind data
    addToBasket = () => {
        console.log('Đã thêm');
    }
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
                            {/* Cú pháp () => {function} là arrow function và có truyền tham số */}
                            {/* Cách một */}
                            {/* <a href="#//" className="btn btn-primary" onClick={()=> {this.showDetail(this.props.name)}}>Xem chi tiết</a> */}
                            <a href="#//" className="btn btn-primary" onClick={this.showDetail}>Xem chi tiết</a>
                            <a href="#//" className="btn btn-default" onClick={this.addToBasket}>Thêm vào giỏ</a>
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default product;