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
    const minName = 2;
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
            disabled={ artistName.length < minName }
          >
            Pesquisar
          </button>
        </form>
      </div>
    );
  }
}

export default Search;
