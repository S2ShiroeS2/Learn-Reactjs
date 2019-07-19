import React, {Component} from 'react';
import './App.css';
import Colortext from './components/colortext';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color : 'red',
            fontSize: 12
        };
    }
    onChangeColor = (color) => {
        this.setState = ({
            color: color
        });
        console.log(color);
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
                            
                        </div>
                    </div>
                </div>            
            </div>
        );
    }
}

export default App;
