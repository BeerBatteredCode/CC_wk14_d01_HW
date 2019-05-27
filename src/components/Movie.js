import React, {Component} from 'react';

class Movie extends Component {

    render(){
        return(
            <div className="movie">
                <h4>{this.props.children}</h4>
                <h4>{this.props.name}</h4>
                <p>{this.props.url}</p>
            </div>
        )
    }
}

export default Movie;