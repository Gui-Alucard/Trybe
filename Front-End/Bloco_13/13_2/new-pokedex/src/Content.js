import React from 'react';
import Pokedex from './Pokedex';
import pokemonList from './data';
import './App.css';

class Content extends React.Component {
  constructor() {
    super()

    this.state = {
      index: 0,
      type: 'Grass',
      pokemonList: pokemonList
    }

    this.handleClick = this.handleClick.bind(this)
    this.handleType = this.handleType.bind(this)
    this.resetState = this.resetState.bind(this)

  }

  handleClick(jump) {
    let newPosition = 0;
    const position = this.state.index

    if (position + jump < this.state.pokemonList.length && position + jump >= 0)
      newPosition = position + jump;
    else if (position + jump < 0) newPosition = this.state.pokemonList.length + jump;
    
    this.setState({index: newPosition})
  }

  handleType(event) {
    const e = event.target.value;
    // eslint-disable-next-line
    let valorAnterior = this.state.type;
    this.setState({type: valorAnterior = e})

    const pokeList = pokemonList
    let newList = [];
    pokeList.map(pokeObject => {
      return pokeObject.Type === e ? newList.push(pokeObject) : undefined
    })
    this.setState({index: 0}) // reseta o state.index
    this.setState({pokemonList: newList})
    // console.log({pokemonList: newList.length})
    // console.log({pokemonList: pokemonList.length})
  }

  resetState() {
    this.setState({index: 0})
    this.setState({pokemonList: pokemonList})
  }

  render() {
    const lista = this.state.pokemonList
    return (
      <div className="body-app">
        <h1>Pokedéx</h1>
        <div>
          <Pokedex 
            pokemonFromList={[lista[this.state.index]]} 
            handleType={this.handleType}
            resetState={this.resetState}
          />
        </div>
        <div className="next-prev-btn">
          <input className="anterior" onClick={() => this.handleClick(-1)} type="button" value="Anterior"/>
          <input className="proximo" onClick={() => this.handleClick(1)} type="button" value="Proximo"/>
        </div>
      </div>
    );
  }
}

export default Content;