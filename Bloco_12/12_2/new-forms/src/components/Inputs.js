import React, { Component } from 'react'

class Inputs extends Component {
  render() {
    const { name, id, type, max } = this.props;
    return (
      <label htmlFor={id} value={name}>{name}: <br /> 
        <input 
          type={type}
          name={name}
          id={id}
          maxLength={max}
          required
        />
      </label>
    )
  }
}

export default Inputs;