// Este componente deve criar um card com as informações de um filme, tais como: nome, ano, imagem.

import React from 'react';


class MovieCard extends React.Component {
  render() {
    const {
      filme: { movieName, releaseYear, image },
    } = this.props;
    return (
      <>
      <div className='movie-details'>
        <h2 className='movie-title'>{movieName}</h2>
        <p>{ releaseYear }</p>
      </div>
      <div className='poster-area'>
        <img src={image} alt={movieName}></img>
      </div>
      </>
    );
  }
}

export default MovieCard;
