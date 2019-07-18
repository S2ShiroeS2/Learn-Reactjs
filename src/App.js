import React, { Component } from 'react';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //key
            products: [
                //value
                {
                    id: 1,
                    name: 'Huawei Y9 Prime (2019)',
                    price: '5.490.000',
                    img: 'https://cdn.tgdd.vn/Products/Images/42/202268/TimerThumb/huawei-y9-prime-2019-hpbd.jpg',
                    title: 'Được trang bị công nghệ camera trượt và màn hình tràn viền ra bốn cạnh.',
                    status: true
                },
                {
                    id: 2,
                    name: 'Samsung Galaxy A70',
                    price: '7.890.000',
                    img: 'https://cdn.tgdd.vn/Products/Images/42/195012/samsung-galaxy-a70-white-400x400.jpg',
                    title: 'Thiết kế tinh tế và tối giản. Với góc cạnh vát 3D mới, mềm mại, dễ cầm',
                    status: true
                },
                {
                    id: 3,
                    name: 'OPPO Reno',
                    price: '11.040.000',
                    img: 'https://cdn.tgdd.vn/Products/Images/42/200438/TimerThumb/oppo-reno-hpbd.jpg',
                    title: 'Thiết kế đi đầu xu hướng. Màn hình siêu tràn đem lại hình ảnh bát tận, không giới hạn',
                    status: true
                }
            ],
            isActive: true
        };
    }
    onSetState = () => {
        //Cách 1
        // if(this.state.isActive === true) {
        //     this.setState({
        //         isActive : false
        //     });
        // }
        // else {
        //     this.setState({
        //         isActive : true
        //     });
        // }
        //Cách 2:
        this.setState({
            isActive : !this.state.isActive
        });
    }
    render() {
        let elements = this.state.products.map((product, index) => {
            let result = null; //Phải để result = null nếu để '' thì lỗi
            if (this.state.isActive === true) {
                result = <tr key={product.id}>
                            <td>{index}</td>
                            <td>{product.name}</td>
                            <td>
                                <span className="label label-success">{product.price}₫</span>
                            </td>
                        </tr>
            }
            return result;
        });
        return (
            <div>
                <nav className="navbar navbar-inverse">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#//">Demo Event state</a>
                    </div>
                </nav>
                <div className="container">
                    <div className="row">

                        <table className="table table-bordered table-hover">
                            <thead className="thead-dark">
                                <tr>
                                    <th>STT</th>
                                    <th>Product name</th>
                                    <th>Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {elements}
                            </tbody>
                        </table>
                        <button type="button" className="btn btn-warning" onClick={this.onSetState}>Active : {this.state.isActive === true ? 'true' : 'false'}</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;