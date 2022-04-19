import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
      loading: false,
    });
  }

  render() {
    const { loginName, loading } = this.state;
    return (
      <header data-testid="header-component">
        <h1>TrybeTunes</h1>
        { loading ? <Loading /> : <p data-testid="header-user-name">{ loginName }</p> }
        <Link data-testid="link-to-search" to="/search">Pesquisa</Link>
        <Link data-testid="link-to-favorites" to="/favorites">Favoritas</Link>
      </header>
    );
  }
}

export default Header;
