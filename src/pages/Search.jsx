import React, { Component } from 'react';
import CardAlbums from '../components/CardAlbums';
import Header from '../components/Header';
import Loading from '../components/Loading';
import searchAlbumsAPI from '../services/searchAlbumsAPI';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      artistName: '',
      loading: false,
      albums: [],
      search: '',
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
    this.setState({ loading: true, search: artistName });
    const result = await searchAlbumsAPI(artistName);
    this.setState({
      artistName: '',
      loading: false,
      albums: result,
    });
  }

  render() {
    const { artistName, albums, loading, search } = this.state;
    const minName = 2;
    return (
      <div data-testid="page-search">
        <Header />
        <form>
          <label htmlFor={ artistName }>
            <input
              type="text"
              name={ artistName }
              value={ artistName }
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
        { loading
          ? <Loading />
          : <CardAlbums albums={ albums } nameArtist={ search } /> }
      </div>
    );
  }
}

export default Search;
