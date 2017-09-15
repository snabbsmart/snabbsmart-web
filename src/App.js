import React, { Component } from 'react';
import EnterPin from './EnterPin.js';
import PlayerList from './PlayerList.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <main className="center-column">
        <EnterPin />
        <PlayerList />
      </main>
    );
  }
}

export default App;
