import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionCreator } from '../actions';
import Input from '../components/Input';

class Login extends Component {
  constructor() {
    super();

    this.strictArea = this.strictArea.bind(this);

    this.state = {
      email: '',
      pass: '',
      data: false,
    }

  }

  strictArea() {
    const { actionLogin } = this.props;
    const { email, pass } = this.state;
    if (email.length >= 1 && pass.length >= 1) {
      actionLogin({ email, pass })
      this.props.history.push("/customers")
    } else {
      alert("Access denied")
    }
  }

  render() {
    return (
      <fieldset className="login-container">
        <Input
          onChange={(e) => this.setState({email: e.target.value})}
          type="text"
          name="Email"
          id="email"
          value="email"
          max="40"
        />
        <br />
        <Input
          onChange={(e) => this.setState({pass: e.target.value})}
          type="password"
          name="Password"
          id="pass"
          value="pass"
          max="20"
        />
        <br />
        <button onClick={this.strictArea} type="button">LOGIN</button>
      </fieldset>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  actionLogin: (payload) => dispatch(actionCreator(payload))
});

export default connect(null, mapDispatchToProps)(Login);
