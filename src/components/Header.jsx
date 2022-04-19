import React, { Component } from 'react';
import { getUser } from '../services/userAPI';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      loginName: '',
    };
  }

  componentDidMount = async () => {
    const { name } = await getUser();
    this.setState({
      loginName: name,
    });
  }

  render() {
    return (
      <header data-testid="header-component">
        <h1>TrybeTunes</h1>
      </header>
    );
  }
}

export default Header;
