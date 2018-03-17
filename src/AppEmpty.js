import React, { Component } from 'react';

class Title extends Component {
    render() {
        return <h1>{this.props.text}</h1>
    }
}

Title.defaultProps = {
    text: 'Título por defecto'
}

class App extends Component {
    render() {
        return (
            <div>
                <Title text='Título alternativo' />
            </div>
        )
    }
}

export default App;