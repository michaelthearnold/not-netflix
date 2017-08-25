import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import MovieData from './MovieData'
import MovieText from './MovieText'
import MovieList from './MovieList'


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


  moveBetweenLists(sourceProp, destProp, movie) {
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


  render() {
    var style = this.getStyle()
    return (
      <div style={style.container}>
        {/* Header */}
        <h1 style={style.header}>Not Netflix</h1>
        <h4 style={style.subHeader}>All 6 of your favorite shows in one place.</h4>

        <MovieList header={"My List"}
          movies={this.state.myList}
          buttonStyle={"danger"}
          buttonText={"Remove"}
          onClick={this.moveBetweenLists.bind(this, "myList", "recommendations")}/>

        <MovieList header={"Recommendations"}
          movies={this.state.recommendations}
          buttonStyle={"success"}
          buttonText={"Add To List"}
          onClick={this.moveBetweenLists.bind(this, "recommendations", "myList")}/>

        <MovieText header={"My List"}
          movies={this.state.myList}/>
      </div>
    )
  }
}


export default App