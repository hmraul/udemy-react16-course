import React, {Component} from 'react'

export default class Forms extends Component {
  handleClick = (e) => {
    e.preventDefault()
    const name = this.inputName.value
    const twitter = document.getElementById('twitter').value
    console.log(name, twitter)
  }

  render () {
    return (
      <div>
        <h4>Formularios</h4>
        <form>
          <p>
            <label htmlFor='name'>Nombre: </label>
            <input
              id='name'
              name='userName'
              placeholder='Introduce tu nombre' 
              ref={inputElement => this.inputName = inputElement}/>
          </p>
          <p>
            <label>Twitter: </label>
            <input
              id='twitter'
              name='twitterAccount'
              placeholder='Introduce tu twitter' />
          </p>
          <button onClick={this.handleClick}>Enviar</button>
        </form>
      </div>
    )
  }
}