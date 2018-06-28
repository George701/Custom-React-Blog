import React, { Component } from 'react';
import Header from './Components/Header/Header';
import Body from './Components/Body/Body';
import './App.css';

class App extends Component {
    getDefaultPropos(){
        return{
            description:"This is basic Jumbotron, which inspired by Bootstrap.",
            // link:"test.com"
            name: 'Nikchemnost'
        }
    }
  render() {
    return (
      <div className="App">
          <Header
              description = {this.getDefaultPropos().description}
              link = {this.getDefaultPropos().link}
          />
          <Body />
      </div>
    );
  }
}

export default App;
