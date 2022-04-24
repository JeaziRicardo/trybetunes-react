import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { addSong, removeSong } from '../services/favoriteSongsAPI';
import Loading from './Loading';

class MusicCard extends Component {
  constructor(props) {
    super(props);
    const { favorite } = props;
    this.state = {
      loading: false,
      checked: favorite,
    };
  }

  handleChange = async ({ target }) => {
    const { song } = this.props;
    const { checked } = target;
    this.setState({ loading: true });
    if (checked) {
      await addSong(song);
    } else {
      await removeSong(song);
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
  favorite: PropTypes.bool.isRequired,
  song: PropTypes.shape({
    trackId: PropTypes.number,
    trackName: PropTypes.string,
    previewUrl: PropTypes.string,
  }).isRequired,
};

export default MusicCard;
