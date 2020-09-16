import React from 'react';
import Pokedex from './Pokedex';
import pokemonList from './data';
import './App.css';

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      index: 0,
      type: 'Grass',
      pokemonList: pokemonList
    }

    this.handleClick = this.handleClick.bind(this)
    this.handleType = this.handleType.bind(this)

  }

  handleClick(jump) {
    let newPosition = 0;
    const position = this.state.index

    if (position + jump < pokemonList.length && position + jump >= 0)
      newPosition = position + jump;
    else if (position + jump < 0) newPosition = pokemonList.length + jump;

    this.setState({index: newPosition})
  }

  handleType(event) {
    const e = event.target.value;
    // eslint-disable-next-line
    let valorAnterior = this.state.type;
    this.setState({type: valorAnterior = e})

    const pokeList = pokemonList
    let oldList = this.state.pokemonList
    pokeList.filter(pokeObject => {
      return pokeObject.Type === e ? oldList = [pokeObject] : undefined 
      // Dessa forma, só me retorna o ultimo
      // tem que ser um [ ] com todos os pokes daquele tipo => oldList = [oq receber aqui? todos os pokeObject?]
    })
    this.setState({pokemonList: oldList})
    console.log({pokemonList: oldList})
  }

  render() {
    const lista = this.state.pokemonList
    return (
      <div>
        <div className="body-app">
          <Pokedex 
            pokemonFromList={[lista[this.state.index]]} 
            handleType={this.handleType}
          />
        </div>
        <input onClick={() => this.handleClick(-1)} type="button" value="Anterior"/>
        <input onClick={() => this.handleClick(1)} type="button" value="Proximo"/>
      </div>
    );
  }
}

export default App;
