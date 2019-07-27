import React, {Component} from 'react';
import './App.css';
import Colortext from './components/colortext';
import Sizetext from './components/sizetext';
import Reset from './components/reset';
import Result from './components/Result';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color : 'red',
            fontSize: 12
        };
    }
    // Change Color text
    onChangeColor = (color) => {
        this.setState ({
            color: color
        });
        console.log(color);
    }
    //Change Size text
    onChangeSize = (size) => {
        this.setState ({
            fontSize : (this.state.fontSize + size >= 8 && this.state.fontSize + size <= 36) ? this.state.fontSize + size : this.state.fontSize
        });
        console.log(this.state.fontSize);
    }
    //Reset
    onReset = (data) => {
        this.setState ({
            color: data.color,
            fontSize: data.size
        });
    }
    render() {
        return (
            <div className="App">            
                <div className="container mt-50">
                    <div className="row">
                        {/* color picker   */}
                        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                            <Colortext onChangeColor={this.onChangeColor} defaultColor={this.state.color} />
                        </div>
                        {/* Set font size for text */}
                        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                            <Sizetext size={this.state.fontSize} onChangeSize={this.onChangeSize}/>
                            <Reset onReset={this.onReset} />
                        </div>
                        <Result color={this.state.color} fontSize={this.state.fontSize}/>
                    </div>
                </div>            
            </div>
        );
    }
}

export default App;
