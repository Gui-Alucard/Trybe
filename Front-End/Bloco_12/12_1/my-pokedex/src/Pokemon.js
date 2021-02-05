import React from "react";

function Pokemon({ pokemon }) {
  return (
    <>
      <div className="screen">
        <img src={pokemon.image} alt="pokemon" className="pokemon" />
      </div>
      <li key={pokemon.id}>
        <br />
        <div className="pokeInfo">
          Name: {pokemon.name}
          <br />
          Type: {pokemon.type}
          <br />
          Weight: {pokemon.averageWeight.value}{" "}
          {pokemon.averageWeight.measurementUnit}
          <br />
          Pokedex: {pokemon.id}
        </div>
      </li>
    </>
  );
}

export default Pokemon;
