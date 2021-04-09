import React, {Component} from 'react'
import Header from "./components/header/Header";
import MovieList from "./components/movie-list/MovieList";
import MovieDetails from "./components/movie-details/MovieDetails";

class App extends Component{
  render() {
    return (
        <div className="App">
          <Header/>
          <MovieList/>
          <MovieDetails/>
        </div>
    );
  }
}

export default App;
