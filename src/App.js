import React, {Component} from 'react'
import Header from "./components/header/Header";
import MovieList from "./components/movie-list/MovieList";
import MovieDetails from "./components/movie-details/MovieDetails";

class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            movies : [{
                title: 'Gladiator',
                img: 'https://www.gstatic.com/tv/thumb/v22vodart/24674/p24674_v_v8_ag.jpg',
                details: 'R | 155min | Action',
                description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
            },
                {
                    title: 'La belle et la bête',
                    img: 'https://www.gstatic.com/tv/thumb/v22vodart/24674/p24674_v_v8_ag.jpg',
                    details: 'R | 155min | Dessin animé',
                    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                },
                {
                    title: 'Le roi lion',
                    img: 'https://www.gstatic.com/tv/thumb/v22vodart/24674/p24674_v_v8_ag.jpg',
                    details: 'R | 155min | Dessin animé',
                    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                }
            ],
            selectedMovie: 0
        }
    }

    updateSelectedMovie = (title) => {
        const index = this.state.movies.findIndex((m) => {
            return title === m.title;
        })
        this.setState({
            selectedMovie: index
        })
    }

  render() {
    return (
        <div className="App d-flex flex-column">
            <Header />
            <div className="d-flex flex-row flex-fill pt-4 p-2" >
                <MovieList movies={this.state.movies} updateSelectedMovie={this.updateSelectedMovie} />
                <MovieDetails movie={this.state.movies[this.state.selectedMovie]}/>
            </div>
        </div>
    );
  }
}

export default App;
