import React, { Component } from 'react';
import Header from '../components/Header';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      artistName: '',
    };
  }

  hadleChange = ({ target }) => {
    const { value } = target;
    this.setState({
      artistName: value,
    });
  }

  render() {
    const { artistName } = this.state;
    return (
      <div data-testid="page-search">
        <Header />
        <form>
          <label htmlFor={ artistName }>
            <input
              type="text"
              name={ artistName }
              placeholder="Nome do Artista"
              data-testid="search-artist-input"
              onChange={ this.hadleChange }
            />
          </label>

          <button
            type="button"
            data-testid="search-artist-button"
          >
            Pesquisar
          </button>
        </form>
      </div>
    );
  }
}

export default Search;
