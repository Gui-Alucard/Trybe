import React, { Component } from 'react';
import { connect } from 'react-redux';

class FormsResult extends Component {
  render() {
    const { formulario } = this.props;
    const { name, email, cpf, country, city, street, residence, resume } = formulario;
    return (
      <div>
        <p>{name}</p>
        <p>{email}</p>
        <p>{cpf}</p>
        <ul>
          <li>{country}</li>
          <li>{city}</li>
          <li>{street}</li>
          <li>{residence}</li>
        </ul>
        <p>{resume}</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  formulario: state.reducerFormResult.forms
});

export default connect(mapStateToProps)(FormsResult);