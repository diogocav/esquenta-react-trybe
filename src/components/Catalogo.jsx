// - Este componente deve ser renderizado dentro de App e listar todos os filmes presentes no /data/movies.js

import React from 'react';
import MovieCard from './MovieCard';
import MovieTitle from './MovieTitle';

class Catalogo extends React.Component {
  render() {
    const { filmes } = this.props;
    return (
      <div>
        <MovieTitle />
        <div className='catalog-area'>
          {filmes.map((filme) => {
            return (
              <div key={filme.movieName} className='movie-card'>
                <MovieCard filme={filme} />                
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Catalogo;
