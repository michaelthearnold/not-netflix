import React, { Component } from 'react'
import * as Bs from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import MovieData from './MovieData'
import Movie from './Movie'


class App extends Component {
  //Initial state of the component. Kept in its own function to allow easy wiping of state
  //with this.setState(this.getInitialState())
  getInitialState() {
    return {
      recommendations: [],
      myList: []
    }
  }


  //CSS styles to be applied to component. Kept in the code so that it can change based on state,
  //props, or imported files. Should be called through render, or functions called by render
  //so that any state dependent CSS is updated when state changes.
  getStyle() {
    return {
      container: {
        textAlign: "center",
        color: "#fdfefe",
        backgroundColor: "#141414"
      },
      movieContainer: {
        display: "block",
        whiteSpace: "nowrap",
        overflow: "auto",
        overflowY: "hidden",
        maxHeight: 233,
        width: "100%"
      },
      header: {
        fontSize: 80,
        color: "#df1718"
      },
      subHeader: {
        padding: "0px 0px 20px 0px"
      }
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


  moveBetweenLists(movie, sourceProp, destProp) {
    //duplicate current state to prevent tampering with it
    var source = this.state[sourceProp].slice()
    var dest = this.state[destProp].slice()

    //get index of movie being removed
    var index = source.indexOf(movie)

    //swap it from one list to the other
    dest.push(source[index])
    source.splice(index, 1)

    //create new state to be updated, and map it to local state
    var state = {}
    state[sourceProp] = source
    state[destProp] = dest
    this.setState(state)
  }


  getMyListMovies() {
    var style = this.getStyle()

    //don't display anything if there's no movies in myList
    if(this.state.myList.length <= 0)
      return null

    //generate list of movies to be displayed
    var movies = this.state.myList.map(movie => {
      return (
        <Movie title={movie.title}
          img={movie.img}
          key={movie.id}>

          {/* child to be displayed in popover on hover */}
          <Bs.Button bsStyle={"danger"} 
            onClick={this.moveBetweenLists.bind(this, movie, "myList", "recommendations")}>

            Remove
          </Bs.Button>
        </Movie>
      )
    })

    return (
      <div>
        <h1>My List</h1>
        <div style={style.movieContainer}>
          {movies}
        </div>
      </div>
    )
  }


  getRecommendedMovies() {
    var style = this.getStyle()

    //don't display anything if there's no movies in recommendations
    if(this.state.recommendations.length <= 0)
      return null

    var movies = this.state.recommendations.map(movie => {
      return (
        <Movie title={movie.title}
          img={movie.img}
          key={movie.id}>

          {/* child to be displayed in popover on hover */}
          <Bs.Button bsStyle={"success"}
            onClick={this.moveBetweenLists.bind(this, movie, "recommendations", "myList")}>

            Add to List
          </Bs.Button>
        </Movie>
      )
    })

    return (
       <div>
        <h1>Recommendations</h1>
        <div style={style.movieContainer}>
          {movies}
        </div>
      </div>
    )
  }


  getMyListText() {
    //don't display anything if mylist is empty
    if(this.state.myList.length <= 0)
      return null

    //concatinate titles separated by commas
    var text = this.state.myList.map(movie => movie.title)
    text = text.join(", ")

    return (
      <div>
        <h1>My List</h1>
        <h4>{text}</h4>
      </div>
    )
  }


  render() {
    var style = this.getStyle()
    return (
      <div style={style.container}>
        {/* Header */}
        <h1 style={style.header}>Not Netflix</h1>
        <h4 style={style.subHeader}>All 6 of your favorite movies in one place.</h4>

        {/* MyList Movies */}
        {this.getMyListMovies()}

        {/* Recommendation Movies */}
        {this.getRecommendedMovies()}

        {/* MyList text */}
        {this.getMyListText()}
      </div>
    )
  }
}


export default App