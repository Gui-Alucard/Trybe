import React from 'react';
import Image from './image';

class PokeInfo extends React.Component {
  render() {
    const { id, name, type, averageWeight, image } = this.props.pokemon;
    return (
      <p>
        <strong>{name}</strong><br />
        Type: <em>{type}</em><br />
        Average Weigth: {averageWeight.value}{averageWeight.measurementUnit}<br />
        Pokedex: <strong>{id}</strong><br />
        <Image source={image} altText={"Imagem do Pokemon"} />
      </p>
    );
  }
}

export default PokeInfo;