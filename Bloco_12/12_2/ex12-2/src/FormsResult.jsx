import React, { Component } from 'react'

class FormsResult extends Component {
  render() {
    const { nome, email, cpf, endereço, cidade } = this.props;
    return (
      <div>
        <p>{nome}</p>
        <p>{email}</p>
        <p>{cpf}</p>
        <p>{endereço}</p>
        <p>{cidade}</p>
      </div>
    );
  }
}

export default FormsResult;