import React, {Component} from 'react';

class Colortext extends Component {
    constructor(props) {
        super(props);
        // Đặt các giá trị màu
        this.state = {
            colors: ['red', 'green', 'blue', '#ccc']
        };
    }
    // show color
    setColortext(color) {
        return {
            backgroundColor: color
        };
    }
    //Thay đổi màu
    onSettingColor(color) {
        this.props.onChangeColor(color);
    }
    render() {
        let elementsColor = this.state.colors.map((color, index)=>{
            return <span 
                    key={index} 
                    style={this.setColortext(color)} 
                    className={ this.props.defaultColor === color ? 'active' : '' }
                    onClick={() => this.onSettingColor(color)}></span>
        });
        return (
            <div className="panel panel-primary">
                  <div className="panel-heading">
                        <h3 className="panel-title">Color Picker</h3>
                  </div>
                  <div className="panel-body">
                        {elementsColor}
                        <hr/>
                  </div>
            </div>
        );
    }
}

export default Colortext;
