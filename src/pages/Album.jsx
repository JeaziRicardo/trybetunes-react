import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import getMusics from '../services/musicsAPI';
import Loading from '../components/Loading';
import MusicCard from '../components/MusicCard';
import { getFavoriteSongs } from '../services/favoriteSongsAPI';

class Album extends Component {
  constructor() {
    super();
    this.state = {
      musics: [],
      favorites: [],
      loading: true,
    };
  }

  componentDidMount = async () => {
    const { match: { params: { id } } } = this.props;
    const musics = await getMusics(id);
    const favorites = await getFavoriteSongs();
    this.setState({
      musics,
      favorites,
      loading: false,
    });
  }

  render() {
    const { musics, loading, favorites } = this.state;
    return (
      <main data-testid="page-album">
        {loading ? <Loading /> : (
          <section>
            <Header />
            <section>
              <img src={ musics[0].artworkUrl100 } alt={ musics[0].collectionName } />
              <h3 data-testid="album-name">{ musics[0].collectionName }</h3>
              <p data-testid="artist-name">{ musics[0].artistName }</p>
            </section>
            {musics.map((music, index) => index > 0 && (
              <MusicCard
                key={ index }
                trackId={ music.trackId }
                previewUrl={ music.previewUrl }
                trackName={ music.trackName }
                song={ music }
                favorite={ favorites.some(({ trackId }) => trackId === music.trackId) }
              />
            ))}
          </section>
        )}
      </main>
    );
  }
}

Album.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default Album;
