import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Content from './Content';

class App extends Component {

  componentDidMount() {
    return <Content />
  }

  render() {
    return (
      <BrowserRouter>
        <Route exact path="/">
          <Content />
        </Route>
      </BrowserRouter>
    );
  }
}

export default App;
