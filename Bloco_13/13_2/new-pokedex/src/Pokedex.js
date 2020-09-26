import React, { Component } from 'react';
import PokemonCard from './PokemonCard';
import TypeButton from './TypeButtons';
import './Pokedex.css';

class Pokedex extends Component {
  render() {
    const { pokemonFromList, handleType, resetState } = this.props;
    return (
      <div className="pokedex-container">
        <section className="pokedex-list">
          {pokemonFromList.map(eachPoke => <PokemonCard pokemon={eachPoke} key={eachPoke.Name} />)}
        </section>
        <div>
          <TypeButton handleType={handleType} resetState={resetState} />
        </div>
      </div>
    )
  }
}

export default Pokedex;
