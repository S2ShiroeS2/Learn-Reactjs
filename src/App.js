import React, { Component } from 'react';
import './App.css';

class App extends Component {
    //State lưu trữ dữ liệu
    constructor(props) {
        super(props);
        this.state = {
            txtName: '',
            txtPassword: '',
            txtComment: '',
            sltGender: 0, //Thuộc tính này nhận giá trị là số
            rdLan: 'vi',
            ckbStatus: false
        };
    }
    onHandleChange = (event) => {
        var target = event.target; //Target đến từng ô input
        var name = target.name; // Truy xuất đến từng name của mỗi input
        //Kiểm tra xem nó là kiểu checkbox hay k để sử lý
        var value = target.type === 'checkbox' ? target.checked : target.value;

        this.setState({
            [name]: value
        });
    }
    onHandleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
    }
    render() {
        return (             
            <div className="container mt-30">               
                <div className="row">                    
                    <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8 mg">                        
                        <div className="panel panel-primary">
                            <div className="panel-heading">
                                <h3 className="panel-title">Form in ReactJS</h3>
                            </div>
                            <div className="panel-body">                                    
                                <form onSubmit={this.onHandleSubmit}>                                    
                                    <div className="form-group">
                                        <label htmlFor="txtName">User name: </label>
                                        <input type="text" className="form-control" name="txtName" value={this.state.txtName} onChange={this.onHandleChange} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="txtPassword">Password: </label>
                                        <input type="password" className="form-control" name="txtPassword" value={this.state.txtPassword} onChange={this.onHandleChange} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="txtPassword">Comment: </label>
                                        <textarea className="form-control" name="txtComment" value={this.state.txtComment} onChange={this.onHandleChange} cols="30" rows="10"></textarea>
                                    </div>
                                    <label htmlFor="sltGender">Gender: </label>
                                    <select value={this.state.sltGender} onChange={this.onHandleChange} className="form-control mb-10" name="sltGender">
                                        <option value={0}>male</option>
                                        <option value={1}>female</option>
                                    </select>
                                    <label>Language</label>
                                    <div className="radio">
                                        <label>
                                            <input type="radio" name="rdLan" value="vi" onChange={this.onHandleChange} checked={this.state.rdLan === "vi"}/>
                                            Vietnamese
                                        </label> &nbsp;
                                        <label>
                                            <input type="radio" name="rdLan" value="en" onChange={this.onHandleChange} checked={this.state.rdLan === "en"}/>
                                            English
                                        </label>
                                    </div>
                                    {/* Là loại đặc biệt, phải sử lý trong hàm onHandleChange trong hàm bắt sự kiện của nó*/}
                                    <div className="checkbox">
                                        <label>
                                            <input type="checkbox" name="ckbStatus" value={true} onChange={this.onHandleChange} checked={this.state.ckbStatus === true}/>
                                            I agree to terms
                                        </label>
                                    </div>                               
                                    <button type="submit" className="btn btn-primary">Submit</button>&nbsp;
                                    <button type="reset" className="btn btn-default">Clear space</button>
                                </form>
                            </div>
                        </div>
                    </div>                    
                </div>                
            </div>            
        );
    }
}

export default App;