import React, { Component } from 'react';
import PokeGif from './PokeGif';

class PokemonCard extends Component {
  render() {
    const { Id, Name, Type, HP, Attack, Defense, Image, MoreInfo } = this.props.pokemon;
    return (
      <section className="poke-card">
        <PokeGif source={Image} alt={Name} />
        <div className="poke-info">
          <li><strong>Name:</strong> {Name}</li>
          <li><strong>Pokedex Nº:</strong> {Id}</li>
          <li><strong>Type:</strong> {Type}</li>
          <li><strong>Hp:</strong> {HP}</li>
          <li><strong>Attack:</strong> {Attack}</li>
          <li><strong>Defense:</strong> {Defense}</li>
          <a className="btn btn-primary" rel="noopener noreferrer" href={MoreInfo} target="_blank">More Info</a>
        </div>
      </section>
    )
  }
}

export default PokemonCard;
