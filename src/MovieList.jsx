import React, { Component } from 'react'
import Movie from './Movie'
import * as Bs from 'react-bootstrap'


//Displayed a given set of movies in a single row, and gives them all a popover button on hover.
//Expects the following properties:
//  movies: list - movie objects to be displayed
//  header: string - header to display
//  buttonStyle: string - bsStyle to be applied to button
//  onClick: func - to be fed movie object on button click
class MovieList extends Component { 
  getStyle() {
    return {
      movieContainer: {
        display: "block",
        whiteSpace: "nowrap",
        overflow: "auto",
        overflowY: "hidden",
        width: "100%"
      },
      button: {
        width: "100%",
        borderRadius: "0px 0px 4px 4px"
      }
    }
  }


  getHeader() {
    return this.props.header ? <h1>{this.props.header}</h1> : null
  }


  getMovies() {
    var style = this.getStyle()

    //generate list of movies to be displayed    
    return this.props.movies.map(movie => {
      return (
        <Movie title={movie.title}
          img={movie.img}
          key={movie.id}>

          {/* child to be displayed in popover on hover */}
          <Bs.Button bsStyle={this.props.buttonStyle}
            style={style.button}
            onClick={this.props.onClick.bind(this, movie)}>

            {this.props.buttonText}
          </Bs.Button>
        </Movie>
      )
    })
  }


  render() {
    var style = this.getStyle()

    //don't display anything if there are no movies
    if(!this.props.movies || this.props.movies.length <= 0)
      return null

    return (
      <div>
        {this.getHeader()}
        <div style={style.movieContainer}>
          {this.getMovies()}
        </div>
      </div>
    )
  }
}


export default MovieList