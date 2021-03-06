import React, {Component} from 'react'
import Header from "./components/header/Header";
import MovieList from "./components/movie-list/MovieList";
import MovieDetails from "./components/movie-details/MovieDetails";
import data from "./data"
import Loaded from "./components/utils/Loaded";

class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            movies: null,
            selectedMovie: 0,
            loaded: false
        }

        setTimeout( () => {
            this.setState({
                movies : data,
                loaded: true
            })
        }, 1000)
    }

    updateSelectedMovie = (index) => {
        this.setState({
            selectedMovie: index
        })
    }

  render() {
    return (
        <div className="App d-flex flex-column">
            <Header />
            {this.state.loaded ? (
                <div className="d-flex flex-row flex-fill pt-4 p-2" >
                <MovieList movies={this.state.movies} updateSelectedMovie={this.updateSelectedMovie} />
                <MovieDetails movie={this.state.movies[this.state.selectedMovie]}/>
            </div>
            ) : (<Loaded/>)}

        </div>
    );
  }
}

export default App;
