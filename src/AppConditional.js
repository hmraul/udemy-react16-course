import React, { Component } from 'react';
//import ConditionalSection from './sections/conditional'
import ConditionalSection from './sections/conditionalLogin'

class App extends Component {
    render() {
        return (
            <div className="App">
                <ConditionalSection />
            </div>
        )
    }
}

export default App;