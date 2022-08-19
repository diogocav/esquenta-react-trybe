import React from 'react';
import './App.css';
import Header from './components/Header';
import { movieList } from './data/movies';
import Catalogo from './components/Catalogo';
import Footer from './components/Footer';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Catalogo filmes={movieList} />
        <Footer />
      </div>
    );
  }
}

export default App;
