import React from 'react';
import PokeInfo from './PokeInfo';

class PokeList extends React.Component {
  render() {
    const { pokemons } = this.props;
    return (
      <div className="App-pokedex">
        {pokemons.map((pokemon, index) => <PokeInfo key={index} pokemon={pokemon} />)}
      </div>
    );
  }
}

export default PokeList;
