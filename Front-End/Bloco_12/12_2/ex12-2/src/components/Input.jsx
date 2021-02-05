import React, { Component } from 'react'

export default class Input extends Component {
  render() {
    const { type, length, required, name, onChange, onBlur, placeholder, value } = this.props;
    return (
      <div>
        <input
          name={name}
          type={type}
          maxLength={length}
          required={required}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
          value={value}
        />
      </div>
    );
  }
}
