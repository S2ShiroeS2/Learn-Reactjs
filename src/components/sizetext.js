import React, {Component} from 'react';

class Sizetext extends Component {
    constructor(props) {
        super(props);
        this.state = {
            size: this.props.size
        }
        //Binding
        this.increaseSize = this.increaseSize.bind(this);
        this.decreaseSize = this.decreaseSize.bind(this);
    }
    increaseSize() {
        this.props.onChangeSize(2);
    }
    decreaseSize() {
        this.props.onChangeSize(-2);
    }
    render() {
        return (
            <div className="panel panel-warning">
                  <div className="panel-heading">
                        <h3 className="panel-title">Size : {this.props.size}px</h3>
                  </div>
                  <div className="panel-body">
                        <button type="button" className="btn btn-success" onClick={this.decreaseSize}>Giảm</button>&nbsp;
                        <button type="button" className="btn btn-success" onClick={this.increaseSize}>Tăng</button>
                  </div>
            </div>
        );
    }
}

export default Sizetext;
