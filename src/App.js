import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// function Hello(props) {
//   return <h1 className="App-title">{props.title}</h1>
// }

// const Hello = (props) => <h1 className="App-title">{props.title}</h1>

class Hello extends Component {
  render() {
    return <h1 className="App-title">{this.props.title}</h1>
  }
}

class Text extends Component {
  render() {
    const {
      arrayOfNumbers,
      double,
      object,
      title
    } = this.props

    // this.props.subtitle=<h3>Subtítulo modificado</h3>

    const doubleNumbers = arrayOfNumbers.map(double)

    return (
      <div>
        {title}
        <p>{doubleNumbers.join(', ')}</p>
        <p>{object.firstKey}</p>
      </div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Hello title='Hello from props' />
        </header>
        <Text
          arrayOfNumbers={[2, 3, 10]}
          double={n => n * 2}
          isActivated
          number={2}
          object= {{firstKey: 'first value', secondKey: 'second value'}}
          subtitle={<h3>Este es el subtítulo</h3>}
          text='Texto desde string'
          title={<h1>Este es el título</h1>}
        />
      </div>
    );
  }
}

export default App;
