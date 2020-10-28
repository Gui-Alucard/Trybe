import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

export default class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <p> HOME </p>
        <Link to="/login">
          <input type="button" value="Login" id="login" />
        </Link>
      </div>
    )
  }
}
