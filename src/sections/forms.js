import React, {Component} from 'react'

export default class Forms extends Component {
  handleSubmit = (e) => {
    e.preventDefault()
    const name = this.inputName.value
    const twitter = document.getElementById('twitter').value
    console.log(name, twitter)
  }

  handleChange = (e) => {
    console.log('handleChange')
    console.log(e.target.checked)
  }

  render () {
    return (
      <div>
        <h4>Formularios</h4>
        <form onSubmit={this.handleSubmit}>
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
          <p>
            <label>
              <input onChange={this.handleChange} type='checkbox' />
              Accepted terms
            </label>
          </p>

          <button>Enviar</button>
        </form>
      </div>
    )
  }
}