import React, {Component} from 'react';
import MovieList from '../components/MovieList';

class MovieBox extends Component {

    constructor(props){
        super(props);

        this.state = {
            data: [
                {
                  id: 1,
                  name: "Spider-Man: Into the Spider-Verse",
                  url: "https://www.imdb.com/title/tt4633694/?ref_=rlm"
                },
                {
                  id: 2,
                  name: "Life Itself",
                  url: "https://www.imdb.com/title/tt5989218/?ref_=rlm"
                },
                {
                  id: 3,
                  name: "Mary Queen of Scots",
                  url: "https://www.imdb.com/title/tt2328900/?ref_=rlm"
                },
                {
                  id: 4,
                  name: "The Lego Movie 2: The Second Part", 
                  url: "https://www.imdb.com/title/tt3513498/?ref_=rlm"
                },
                {
                  id: 5,
                  name: "Captain Marvel",
                  url: "https://www.imdb.com/title/tt4154664/?ref_=rlm"
                }
            ]
        }
    }


    render() {
        return(
            <div className="movie-box">
                <h3>Upcoming film releases for UK</h3>
                <MovieList data={this.state.data}/>
                <button>
                    <a href="https://www.imdb.com/calendar/?region=gb">View More Upcoming Releases</a>
                </button>
            </div>
        )
    }
}

export default MovieBox;