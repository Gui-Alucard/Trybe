import React from 'react';
import data from './data';

class PokeMap extends React.Component {
  render() {
    return (
      <div className="pokeMap">
        {data.map(({ id, name, type, averageWeight, image }) => (
          <li key={id}>
            <img src={image} alt="pokemon"/><br />
            <div className="pokeInfo">
              {name}<br />
              Type: {type}<br />
              Weight: {averageWeight.value} {averageWeight.measurementUnit}<br />
              Pokedex: {id}
            </div>
          </li>
        ))}
      </div>
    )
  }
}

export default PokeMap;