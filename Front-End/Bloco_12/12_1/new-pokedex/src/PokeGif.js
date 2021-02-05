import React, { Component } from 'react'

class PokeGif extends Component {
  render() {
    const { source, alt } = this.props;
    return (
      <div className="img-container">
        <img className="poke-img" src={source} alt={alt} />
      </div>
    )
  }
}

export default PokeGif;
