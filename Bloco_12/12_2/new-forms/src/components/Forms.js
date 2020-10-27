import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionCreator } from '../actions';
import Input from './Input';

const brazilianStates = [
  'Acre (AC)',
  'Alagoas (AL)',
  'Amapá (AP)',
  'Amazonas (AM)',
  'Bahia (BA)',
  'Ceará (CE)',
  'Distrito Federal (DF)',
  'Espírito Santo (ES)',
  'Goiás (GO)',
  'Maranhão (MA)',
  'Mato Grosso (MT)',
  'Mato Grosso do Sul (MS)',
  'Minas Gerais (MG)',
  'Pará (PA)',
  'Paraíba (PB)',
  'Paraná (PR)',
  'Pernambuco (PE)',
  'Piauí (PI)',
  'Rio de Janeiro (RJ)',
  'Rio Grande do Norte (RN)',
  'Rio Grande do Sul (RS)',
  'Rondônia (RO)',
  'Roraima (RR)',
  'Santa Catarina (SC)',
  'São Paulo (SP)',
  'Sergipe (SE)',
  'Tocantins (TO)',
];

class Forms extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      email: '',
      cpf: '',
      city: '',
      street: '',
      country: '',
      residence: '',
      resume: '',
    }
  }

  render() {
    const { formResult } = this.props;
    const { name, email, cpf, city, street, country, residence, resume } = this.state;
    // console.log(formResult);
    return (
      <div className="field-container">
        <fieldset className="dados-pessoais">
          <Input onChange={(e) => this.setState({name: e.target.value})} type="text" name="Nome" id="name" value="name" max="40" />
          <Input onChange={(e) => this.setState({email: e.target.value})} type="text" name="Email" id="email" value="email" max="50" />
          <Input onChange={(e) => this.setState({cpf: e.target.value})} type="text" name="CPF" id="cpf" value="cpf" max="11" />
          <Input onChange={(e) => this.setState({street: e.target.value})} type="text" name="Endereço" id="address" value="address" max="200" />
          <Input onChange={(e) => this.setState({city: e.target.value})} type="text" name="Cidade" id="city" value="city" max="28" />
          <br />
          {
            <select onChange={(e) => this.setState({country: e.target.value})}>
              {brazilianStates.map((state) => (
                <option key={state}>{state}</option>
                ))}
            </select>
          }
          <br />
          <div>
            <label htmlFor="apartamento">
              Apartamento
              <input onClick={(e) => this.setState({ residence: e.target.value })} type="radio" name="residence" value="apartament" id="apartamento" required />
            </label>
            <label htmlFor="casa">
              Casa
              <input onClick={(e) => this.setState({ residence: e.target.value })} type="radio" name="residence" value="house" id="casa" required />
            </label>
          </div>
        </fieldset>
        <fieldset className="experiencia">
          <label htmlFor="curriculo">
            Resumo do currículo
            <textarea onChange={(e) => this.setState({resume: e.target.value})} name="curriculo" id="curriculo" cols="30" rows="10" maxLength="1000" />
          </label>
        </fieldset>
        <button onClick={() => formResult({ name, email, cpf, city, street, country, residence, resume })} type="button">ENVIAR</button>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  formResult: (forms) => dispatch(actionCreator(forms))
});

export default connect(null, mapDispatchToProps)(Forms);
