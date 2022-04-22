import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import getMusics from '../services/musicsAPI';
import MusicCard from '../components/MusicCard';
import Loading from '../components/Loading';

class Album extends Component {
  constructor() {
    super();
    this.state = {
      musics: [],
      loading: true,
    };
  }

  componentDidMount = async () => {
    const { match: { params: { id } } } = this.props;
    const musics = await getMusics(id);
    this.setState({
      musics,
      loading: false,
    });
  }

  render() {
    const { musics, loading } = this.state;
    return (
      <main data-testid="page-album">
        {loading ? <Loading /> : (
          <section>
            <Header />
            <MusicCard
              artworkUrl100={ musics[0].artworkUrl100 }
              collectionName={ musics[0].collectionName }
              artistName={ musics[0].artistName }
              musics={ musics }
            />
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
