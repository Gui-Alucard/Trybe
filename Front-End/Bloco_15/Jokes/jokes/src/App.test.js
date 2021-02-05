import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

describe('Testa os inputs', () => {
  it('alterando o valor dos campos e testando o valor guardado', () => {
    const { getByTestId } = render(<App />);
    const inputNome = getByTestId('input-nome');
    expect(inputNome).toHaveValue('');
    fireEvent.change(inputNome, { target: { value: 'Estudante da Trybe' } });
    expect(inputNome).toHaveValue('Estudante da Trybe');
  
    const inputEmail = getByTestId('input-email');
    expect(inputEmail).toHaveValue('');
    fireEvent.change(inputEmail, { target: { value: 'estudante@trybe.com' } });
    expect(inputEmail).toHaveValue('estudante@trybe.com');
  });
})

describe('Testa a requisição da API simulada', () => {
  test('Verifica que, quando recebo uma piada, rederiza ela na tela', async () => {
    const joke ={
      id: '7822',
      joke: 'Tornados love play Twisted.',
      status: 200,
    };
    const response = { json: jest.fn(() => Promise.resolve(joke)) }
    global.fetch = jest.fn(() => Promise.resolve(response))
    // global.fetch = jest.fn(() => Promise.resolve({ json: jest.fn(() => Promise.resolve(joke)) }))
  
    const { findByText } = render(<App />)
    await findByText('Tornados love play Twisted.')
  });
  
  /*
  // App.test.js
  import React from 'react';
  import { render } from '@testing-library/react'
  import App from './App';

  afterEach(() => jest.clearAllMocks()); // afterEach EXPECT 40, 41
  it('should fetch users', async () => {
    const joke = {
      id: '7h3oGtrOfxc',
      joke: 'Whiteboards ... are remarkable.',
      status: 200,
    };

    global.fetch = jest.fn(()=>
    Promise.resolve({
      json: ()=> Promise.resolve(joke)
    }));

    const { findByText } = render(<App />);
    await findByText('Whiteboards ... are remarkable.');
    expect(global.fetch).toBeCalledTimes(1);
    expect(global.fetch).toBeCalledWith('https://icanhazdadjoke.com/', {"headers": {"Accept": "application/json"}});
  });
  */
})