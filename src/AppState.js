import React, { Component } from 'react';

class Contador extends Component {
  render() {
    const contador = 0
    return <span>{contador}</span>
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <p>Primer componente con state</p>
        <Contador />
      </div>
    );
  }
}

export default App;
