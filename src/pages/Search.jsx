import React, { Component } from 'react';
import Header from '../components/Header';
import searchAlbumsAPI from '../services/searchAlbumsAPI';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      artistName: '',
      loading: false,
      albums: [],
    };
  }

  hadleChange = ({ target }) => {
    const { value } = target;
    this.setState({
      artistName: value,
    });
  }

  handleClick = async () => {
    const { artistName } = this.state;
    this.setState({ loading: true });
    const result = await searchAlbumsAPI(artistName);
    console.log(result);
    this.setState({
      loading: false,
      albums: result,
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
            onClick={ this.handleClick }
          >
            Pesquisar
          </button>
        </form>
      </div>
    );
  }
}

export default Search;
