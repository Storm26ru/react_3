import './Movie.css';
import React from 'react';
class Movie extends React.Component
{
    // constructor(props)
    // {
    //     super(props);
    //     this.state=
    //     {
    //         props:{props}
    //     }
    // }
    render()
    {
        //const {Title, Year, imdbID, Type, Poster} = props;
        return(
            <div className='card'>
                <img src={this.props.Poster} alt={this.props.imdbID} />
                <div>
                    <h3>{this.props.Title}</h3>
                    <p>{ this.props.Year}  <span>{this.props.Type}</span></p>
                </div>
            </div>
        )
    }
}

export default Movie;