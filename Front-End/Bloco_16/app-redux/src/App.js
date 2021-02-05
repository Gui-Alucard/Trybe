import React, { Component } from 'react';
import List from './components/List';
import InputsList from './components/InputsList';

export default class App extends Component {
  render() {
    return (
      <div>
        <InputsList />
        <List />
      </div>
    )
  }
}

