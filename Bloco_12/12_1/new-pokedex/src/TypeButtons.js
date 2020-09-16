import React, { Component } from 'react'

class TypeButtons extends Component {
  render() {
    const { handleType } = this.props;
    return (
      <div>
        <input type="button" value="Bug" onClick={handleType} />
        <input type="button" value="Grass" onClick={handleType} />
        <input type="button" value="Water" onClick={handleType} />
        <input type="button" value="Fire" onClick={handleType} />
        <input type="button" value="Normal" onClick={handleType} />
        <input type="button" value="Poison" onClick={handleType} />
        <input type="button" value="Electric" onClick={handleType} />
        <input type="button" value="Ground" onClick={handleType} />
        <input type="button" value="Fairy" onClick={handleType} />
        <input type="button" value="Fighting" onClick={handleType} />
        <input type="button" value="Psychic" onClick={handleType} />
        <input type="button" value="Rock" onClick={handleType} />
        <input type="button" value="Steel" onClick={handleType} />
        <input type="button" value="Ice" onClick={handleType} />
        <input type="button" value="Ghost" onClick={handleType} />
        <input type="button" value="Dragon" onClick={handleType} />
      </div>
    )
  }
}

export default TypeButtons;