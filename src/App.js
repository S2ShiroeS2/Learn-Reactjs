import React, { Component } from 'react';
import './App.css';
import Product from './component/Product';
// Prop chẳng qua cũng chỉ là thuộc tính của một componet ( hay còn đc gọi là thuộc tính của một class)
class App extends Component {
    render() {
        var products = [
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
        ];
        let element_products = products.map((product, index) => {
            let result = '';
            if(product.status) {
                result = <Product key={product.id} title={product.title} img={product.img} name={product.name} price={product.price}/>
            }
            return result;
        });
        return (
            <div>
                <nav className="navbar navbar-inverse">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="https://reactjs.org/">Props</a>
                    </div>
                </nav>
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            {element_products}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;