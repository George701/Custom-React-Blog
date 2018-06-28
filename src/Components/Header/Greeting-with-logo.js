import React, { Component } from 'react';
import logo from '../assets/img/Bootstrap_logo.svg';

class Greeting extends Component {
    render() {
        return (
            <div className="Greeting">
                <a href="https://getbootstrap.com/"><img src={logo} alt="logo"/></a>
                <h1 className="App-title">{this.props.title}</h1>
            </div>
        );
    }
}

export default Greeting;