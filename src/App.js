import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
        <div className="Shopping-list">
            <h1>Shopping List for {this.props.name}</h1>
            <ul>
                <li>Instagram</li>
                <li>WhatsApp</li>
                <li>Oculus</li>
            </ul>
        </div>
    );
  }
}

export default App;
