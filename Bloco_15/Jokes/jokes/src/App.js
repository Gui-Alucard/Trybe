// App.js
import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      joke: '',
      nome: '',
      email: '',
    }
  }

  async componentDidMount() {
    const API_URL = 'https://icanhazdadjoke.com/';
    const getJoke = await fetch(API_URL, { headers: { Accept: 'application/json' } })
    const response = await getJoke.json();
    this.setState({ joke: response.joke });
  }

  handleInput(e) {
    const { name, value } = e.target;
    console.log(name, value);
    this.setState({ [name]: value });
  }

  render() {
    return (
      <div className="App">
        <h2>
          {this.state.joke}
        </h2>
        <div>
        <h1>Teste de inputs</h1>
        <p>
          Nome:
          <input
            onChange={(e) => this.handleInput(e)}
            name='nome'
            value={this.state.nome}
            data-testid='input-nome'
          />
        </p>
        <p>
          E-mail:
          <input
            onChange={(e) => this.handleInput(e)}
            name='email'
            value={this.state.email}
            data-testid='input-email'
          />
        </p>
      </div>
      </div>
    );
  }
}

export default App;
