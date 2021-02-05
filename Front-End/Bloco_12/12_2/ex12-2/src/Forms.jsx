import React, { Component } from 'react';
import Input from './components/Input';
import FormsResult from './FormsResult';

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
  constructor(props) {
    super(props)

    this.state = {
      nome: '',
      email: '',
      cpf: '',
      endereço: '',
      cidade: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  validateEmail(field, string) {
    return string.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2})$/i)
      ? this.setState({ [field]: '' })
      : this.setState({ [field]: string });
  }

  handleChange(event) {
    const { name, value } = event.target;
    if (name === 'nome') return this.setState({ [name]: value.toUpperCase() });
    if (name === 'email') return this.validateEmail(name, value);
    if (name === 'endereço') return this.setState({ [name]: value.replace(/[^\w\s]/gi, '') })
    
    
    const newState = {};
    newState[name] = value;

    this.setState({ [name]: value });
  }

  handleBlur(event) {
    const { name, value } = event.target;
    if (name === 'cidade') return value.match(/^\d/)
      ? this.setState({ [name]: '' })
      : this.setState({ [name]: value });
    return null;
  }

  render() {
    const { nome, email, cpf, endereço, cidade } = this.state;
    return (
      <form>
        <fieldset>
          <Input 
            name={'nome'}
            length={40}
            type={'text'}
            value={nome}
            placeholder="Nome" 
            required
            onChange={(event) => this.handleChange(event)}
            />
          <Input 
            name={'email'}
            length={50}
            type={'email'}
            value={email}
            placeholder="Email" 
            required
            onChange={(event) => this.handleChange(event)}
            />
          <Input 
            name={'cpf'}
            length={11}
            type={'text'}
            value={cpf}
            placeholder="CPF" 
            required
            onChange={(event) => this.handleChange(event)}
            />
          <Input 
            name={'endereço'}
            length={200}
            type={'text'}
            value={endereço}
            placeholder="Endereço" 
            required
            onChange={(event) => this.handleChange(event)}
            />
          <Input 
            name={'cidade'}
            length={28}
            type={'text'}
            value={cidade}
            placeholder="Cidade" 
            required
            onChange={(event) => this.handleChange(event)}
            onBlur={(event) => this.handleBlur(event)}
            />
          {
            <select>
              {brazilianStates.map((state) => (
                <option key={state}>{state}</option>
                ))}
            </select>
          }
          <label htmlFor="apartamento">
            Apartamento
            <input type="radio" name="residence" id="apartamento" required />
          </label>
          <label htmlFor="casa">
            Casa
            <input type="radio" name="residence" id="casa" required />
          </label>
        </fieldset>
        <div>
          <FormsResult
            nome={nome}
            cpf={cpf}
            endereço={endereço}
            email={email}
            cidade={cidade}
          />
        </div>
      </form>
    );
  }
}

export default Forms;