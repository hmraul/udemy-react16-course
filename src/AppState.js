import React, { Component } from 'react';

class Contador extends Component {
  constructor(props) {
    super(props)
    this.state = {contador : this.props.contadorInitial}
    setInterval(() => {
      this.setState({contador: this.state.contador + 1})
    }, 1000)
  }

  render() {
    return <ContadorNumero numero={this.state.contador} />
  }
}

Contador.defaultProps = {
  contadorInitial : 1
}

class ContadorNumero extends Component {
  render() {
    return <span>{this.props.numero}</span>
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <p>Primer componente con state</p>
        <Contador contadorInitial={100} />
      </div>
    );
  }
}

export default App;
