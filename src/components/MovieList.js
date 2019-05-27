import React, {Component} from 'react';

class MovieList extends Component {
    render(){

        const movieNodes = this.props.data.map(movie => {
            return(
                <Movie name={movie.name} key={movie.id} url={movie.url}></Movie>
            );
        });

        return(
            <div className="movie-list">
                {movieNodes}
            </div>
        )
    }
}

export default MovieList;