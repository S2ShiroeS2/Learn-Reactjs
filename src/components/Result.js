import React, {Component} from 'react';

class Result extends Component {
    setStyle() {
        return {
            color: this.props.color,
            fontSize: this.props.fontSize
        };
    }
    render() {
        console.log(this.props.color);
        return (
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <p>color: {this.props.color} - Front size: {this.props.color}</p>
                <div id="content" style={this.setStyle()}>Nội dung setting</div>     
            </div>
        );
    }
}

export default Result;
