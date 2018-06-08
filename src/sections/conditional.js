import React, {Component} from 'react'

class ComponenteA extends Component {
  render () {
    return <p>Componente A</p>
  }
}

class ComponenteB extends Component {
  render () {
    return <p>Componente B </p>
  }
}

// function useConditionalRendering(mostrarA) {
//   if (mostrarA) {
//     return <ComponenteA/>
//   }

//   return <ComponenteB/> 
// }

export default class ConditionalSection extends Component {
  constructor() {
    super()
    this.state = {mostrarA: true }
  }
  render () {
    // const conditionalComponent = this.state.mostrarA 
    //   ? <ComponenteA/> 
    //   : <ComponenteB/>
    return (
      <div>
        <h4>Conditional rendering</h4>
        {/* {conditionalComponent } */}
        {this.state.mostrarA 
          ? <ComponenteA/> 
          : <ComponenteB/>
        }
       </div>
    )
  }
}

