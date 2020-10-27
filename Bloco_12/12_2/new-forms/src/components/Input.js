import React, { Component } from 'react'

class Input extends Component {
  render() {
    const { name, id, type, max, onChange } = this.props;
    return (
      <label htmlFor={id} value={name}>{name}: <br /> 
        <input 
          type={type}
          name={name}
          id={id}
          maxLength={max}
          onChange={onChange}
          required
        />
      </label>
    )
  }
}

export default Input;