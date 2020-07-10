import React from 'react';
// import Image from './image';
import './App.css';
import pokemons from './data';
import PokeList from './PokeList';

function App() {
  return (
    <div className="App">
        <PokeList pokemons={pokemons} />
    </div>
  );
}

export default App;
