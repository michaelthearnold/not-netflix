import React, { Component } from 'react';
import * as Bs from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css'

class App extends Component {

  getInitialState() {
    return {
      recommendations: [],
      favorites: []
    }
  }

  constructor(props) {
    super(props)
    //initialize state
    this.state = this.getInitialState()
    //get movie data from server
    this.updateMovies()
  }

  updateMovies() {
    
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
        <h1 style={style.center}>Not Netflix</h1>
        <h3 style={style.center}>All 6 of your favorite movies in one place.</h3>
      </div>
    );
  }
}

export default App;
