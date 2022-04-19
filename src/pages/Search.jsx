import React, { Component } from 'react';
import Header from '../components/Header';

class Search extends Component {
  render() {
    return (
      <div data-testid="page-search">
        <Header />
        <form action="">
          <label htmlFor="nome-do-artista">
            <input
              type="text"
              name="nome-do-artista"
              placeholder="Nome do Artista"
              data-testid="search-artist-input"
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
