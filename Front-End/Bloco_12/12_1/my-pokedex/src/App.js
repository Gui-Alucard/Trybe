import React, { useState } from "react";
import "./App.css";
import Pokemon from "./Pokemon";
import data from "./data";

function App(props) {
  const [filter, setFilter] = useState();
  const [position, setPosition] = useState(0);
  const [pokemons, setPokemons] = useState(data);

  function nextPokemon(jump) {
    let newPosition = 0;

    if (position + jump < pokemons.length && position + jump >= 0)
      newPosition = position + jump;
    else if (position + jump < 0) newPosition = pokemons.length + jump;

    setPosition(newPosition);
  }

  return (
    <div className="App">
      <div className="pokedex">
        <Pokemon pokemon={pokemons[position]} />
      </div>
      <div className="botao">
        <input onClick={() => nextPokemon(-1)} type="button" value="Previous" />
        <input onClick={() => nextPokemon(1)} type="button" value="Next" />
      </div>
    </div>
  );
}

export default App;
