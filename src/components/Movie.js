import React, {Component} from 'react';

class Movie extends Component {

    render(){
        return(
            <div className="movie">
                <h4>{this.props.children}</h4>
                <li>
                    <a href={this.props.url}> {this.props.name}</a>
                </li> 
            </div>
        )
    }
}

export default Movie;