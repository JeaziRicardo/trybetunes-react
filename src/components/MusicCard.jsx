import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { addSong } from '../services/favoriteSongsAPI';
import Loading from './Loading';

class MusicCard extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      checked: '',
    };
  }

  handleChange = async ({ target }) => {
    const { song } = this.props;
    const { checked } = target;
    this.setState({ loading: true });
    if (checked) {
      await addSong(song);
    }
    this.setState({ checked, loading: false });
  };

  render() {
    const { trackId, previewUrl, trackName } = this.props;
    const { loading, checked } = this.state;
    return (
      <section>
        {loading ? <Loading /> : (
          <section>
            <h3>{ trackName }</h3>
            <audio data-testid="audio-component" src={ previewUrl } controls>
              <track kind="captions" />
              O seu navegador não suporta o elemento
              {' '}
              <code>audio</code>
              .
            </audio>
            <label htmlFor="favorite">
              Favorita
              <input
                data-testid={ `checkbox-music-${trackId}` }
                type="checkbox"
                name="favorite"
                checked={ checked }
                onChange={ this.handleChange }
              />
            </label>
          </section>
        )}
      </section>
    );
  }
}

MusicCard.propTypes = {
  trackId: PropTypes.number.isRequired,
  previewUrl: PropTypes.string.isRequired,
  trackName: PropTypes.string.isRequired,
  song: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default MusicCard;
