import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
// import App from './App'
// import App from './AppConditional'
import App from './AppObjectsList'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
