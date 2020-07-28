import React from 'react';
import './App.css';
import PokeMap from './PokeMap';
import data from './data';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {filter: undefined};
  }

  setFilterPokemon = (PokeMap) => {
    this.setState({
      filter: PokeMap
    })
    console.log(PokeMap)
  }

  render() {
    return (
      <div className="App">
        <PokeMap />
        <div className="botao">
          <input onClick={this.setFilterPokemon} type="button" value="Previous"/>
          <input onClick={this.setFilterPokemon} type="button" value="Next"/>
        </div>
      </div>
    );
  }
}

export default App;