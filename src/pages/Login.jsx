import React, { Component } from 'react';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      loginName: '',
      isDesabled: true,
    };
  }

  render() {
    const { isDesabled } = this.state;
    return (
      <div data-testid="page-login">
        <form>
          <label htmlFor="loginName">
            <input
              type="text"
              name="loginName"
              placeholder="NOME"
              data-testid="login-name-input"
            />
          </label>

          <button
            type="button"
            data-testid="login-submit-button"
            disabled={ isDesabled }
          >
            Entrar
          </button>

        </form>
      </div>
    );
  }
}

export default Login;
