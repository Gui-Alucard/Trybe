import React, { Component } from 'react'

class TypeButtons extends Component {
  render() {
    const { handleType, resetState } = this.props;
    return (
      <div className="type-buttons">
        <input className="type-btn" type="button" value="Bug" onClick={handleType} />
        <input className="type-btn" type="button" value="Grass" onClick={handleType} />
        <input className="type-btn" type="button" value="Water" onClick={handleType} />
        <input className="type-btn" type="button" value="Fire" onClick={handleType} />
        <input className="type-btn" type="button" value="Normal" onClick={handleType} />
        <input className="type-btn" type="button" value="Poison" onClick={handleType} />
        <input className="type-btn" type="button" value="Electric" onClick={handleType} />
        <input className="type-btn" type="button" value="Ground" onClick={handleType} />
        <input className="type-btn" type="button" value="Fairy" onClick={handleType} />
        <input className="type-btn" type="button" value="Fighting" onClick={handleType} />
        <input className="type-btn" type="button" value="Psychic" onClick={handleType} />
        <input className="type-btn" type="button" value="Rock" onClick={handleType} />
        <input className="type-btn" type="button" value="Steel" onClick={handleType} />
        <input className="type-btn" type="button" value="Ice" onClick={handleType} />
        <input className="type-btn" type="button" value="Ghost" onClick={handleType} />
        <input className="type-btn" type="button" value="Dragon" onClick={handleType} />
        <input className="type-btn" type="button" value="All" onClick={resetState} />
      </div>
    )
  }
}

export default TypeButtons;