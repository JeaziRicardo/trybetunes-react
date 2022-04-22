import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MusicCard extends Component {
  render() {
    const { musics, artworkUrl100, collectionName, artistName } = this.props;
    return (
      <section>
        <section>
          <img src={ artworkUrl100 } alt={ collectionName } />
          <h3 data-testid="album-name">{ collectionName }</h3>
          <p data-testid="artist-name">{ artistName }</p>
        </section>
        <section>
          {musics.map(({ trackId, trackName, previewUrl }, index) => index > 0 && (
            <div key={ trackId }>
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
                />
              </label>
            </div>
          ))}
        </section>
      </section>
    );
  }
}

MusicCard.propTypes = {
  musics: PropTypes.arrayOf(PropTypes.object).isRequired,
  artworkUrl100: PropTypes.string.isRequired,
  collectionName: PropTypes.string.isRequired,
  artistName: PropTypes.string.isRequired,
};

export default MusicCard;
