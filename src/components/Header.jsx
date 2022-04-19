import React, { Component } from 'react';
import { getUser } from '../services/userAPI';
import Loading from './Loading';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      loginName: '',
      loading: true,
    };
  }

  componentDidMount = async () => {
    const { name } = await getUser();
    this.setState({
      loginName: name,
      loading: true,
    });
  }

  render() {
    const { loginName, loading } = this.state;
    return (
      <header data-testid="header-component">
        <h1>TrybeTunes</h1>
        { loading ? <Loading /> : <p data-testid="header-user-name">{ loginName }</p> }
      </header>
    );
  }
}

export default Header;
