import React, { Component } from 'react'
import * as Bs from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import MovieData from './MovieData'
import Movie from './Movie'

class App extends Component {
  getInitialState() {
    return {
      recommendations: [],
      myList: []
    }
  }

  constructor(props) {
    super(props)
    //initialize state
    this.state = this.getInitialState()
  }

  componentDidMount() {
    //get movie data from server
    this.updateMovies()
  }

  updateMovies() {
    //normally we would do an AJAX call to the backend to get some actual data here.
    //Instead, we'll give some dummy data imported from a local file
    this.setState({
      recommendations: MovieData.recommendations,
      myList: MovieData.myList
    })
  }

  getMyListMovies() {
    var movies = this.state.myList.map(movie => {
      return (
        <Movie title={movie.title}
          img={movie.img}
          key={movie.id}>
          <button>Remove</button>
        </Movie>
      )
    })
    return (
      <Bs.Row>
        {movies}
      </Bs.Row>
    )
  }

  getStyle() {
    return {
      center: {
        textAlign: "center"
      }
    }
  }

  render() {
    var style = this.getStyle()
    return (
      <div>
        {/* Header */}
        <h1 style={style.center}>Not Netflix</h1>
        <h3 style={style.center}>All 6 of your favorite movies in one place.</h3>

        {/* MyList Movies */}
        {this.getMyListMovies()}

        {/* Recommendation Movies */}

        {/* MyList text */}

      </div>
    )
  }
}

export default App