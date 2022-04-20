import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class CardAlbums extends Component {
  render() {
    const { albums, nameArtist } = this.props;
    return (
      <section>
        albums === 0 ? (
        <h1>Nenhum álbum foi encontrado</h1>
        ) : (
        <h1>{ `Resultado de álbuns de: ${nameArtist}` }</h1>
        {albums.map(({ artistName, collectionName, artworkUrl100, collectionId }) => (
          <div key={ collectionId }>
            <img src={ artworkUrl100 } alt={ collectionName } />
            <Link
              data-testid={ `link-to-album-${collectionId}` }
              to={ `/album/${collectionId}` }
            >
              { collectionName }
            </Link>
            <p>{ artistName }</p>
          </div>
        ))}
        )
      </section>
    );
  }
}

CardAlbums.propTypes = {
  albums: PropTypes.arrayOf(PropTypes.string).isRequired,
  nameArtist: PropTypes.string.isRequired,
};

export default CardAlbums;
