import React, { Component } from 'react';
import Inputs from './Inputs';

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

  render() {
    return (
      <div className="field-container">
        <fieldset className="dados-pessoais">
          <Inputs type="text" name="Nome" id="name" value="name" max="40" />
          <Inputs type="text" name="Email" id="email" value="email" max="50" />
          <Inputs type="text" name="CPF" id="cpf" value="cpf" max="11" />
          <Inputs type="text" name="Endereço" id="address" value="address" max="200" />
          <Inputs type="text" name="Cidade" id="city" value="city" max="28" />
          <br />
          {
            <select>
              {brazilianStates.map((state) => (
                <option key={state}>{state}</option>
                ))}
            </select>
          }
          <br />
          <div>
            <label htmlFor="apartamento">
              Apartamento
              <input type="radio" name="residence" id="apartamento" required />
            </label>
            <label htmlFor="casa">
              Casa
              <input type="radio" name="residence" id="casa" required />
            </label>
          </div>
        </fieldset>
        <fieldset className="experiencia">
          <label htmlFor="curriculo">
            Resumo do currículo
            <textarea name="curriculo" id="curriculo" cols="30" rows="10" maxLength="1000" />
          </label>
        </fieldset>
      </div>
    )
  }
}

export default Forms;
