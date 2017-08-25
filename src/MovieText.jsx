import React, { Component } from 'react'


//Converts given list of movies into a single text string
class MovieText extends Component {
  getHeader() {
    return this.props.header ? <h1>{this.props.header}</h1> : null
  }


  render() {
    //don't display anything if movies list is empty
    if(this.props.movies.length <= 0)
      return null

    //concatinate titles separated by commas
    var text = this.props.movies.map(movie => movie.title)
    text = text.join(", ")

    return (
      <div>
        {this.getHeader()}
        <h4>{text}</h4>
      </div>
    )
  }
}


export default MovieText