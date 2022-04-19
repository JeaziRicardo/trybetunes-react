import React, { Component } from 'react';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      loginName: '',
    };
  }

  handleChange = ({ target }) => {
    const { value } = target;
    this.setState({ loginName: value });
  };

  render() {
    const { loginName } = this.state;
    const minName = 3;
    return (
      <div data-testid="page-login">
        <form>
          <label htmlFor="loginName">
            <input
              type="text"
              name="loginName"
              placeholder="NOME"
              value={ loginName }
              onChange={ this.handleChange }
              data-testid="login-name-input"
            />
          </label>

          <button
            type="button"
            data-testid="login-submit-button"
            disabled={ loginName.length < minName }
          >
            Entrar
          </button>

        </form>
      </div>
    );
  }
}

export default Login;
