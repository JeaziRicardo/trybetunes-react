import React, { Component } from 'react';

class Login extends Component {
  render() {
    return (
      <div data-testid="page-login">
        <form>
          <label htmlFor="loginName">
            <input type="text" name="loginName" placeholder="NOME" />
          </label>

          <button type="button" disabled="">Entrar</button>

        </form>
      </div>
    );
  }
}

export default Login;
