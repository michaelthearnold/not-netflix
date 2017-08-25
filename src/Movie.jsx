import React, { Component } from 'react'
import Popover from './Popover'


//Generic movie component to be used for myList and recommendations.
//Expects the properties title and img.
//Its children will be displayed below the movie image as a popover on hover.
class Movie extends Component {
  getStyle() {
    return {
      container: {
        display: "inline-block",
        padding: "0px 2px",
        cursor: "pointer"
      },
      img: {
        maxHeight: 233
      }
    }
  }


  getInitialState() {
    return {
      showOverlay: false
    }
  }


  constructor(props) {
    super(props)
    this.state = this.getInitialState()
  }
  

  //we need to tap into the mouse enter/leave to present the popover at the right time
  onMouseEnter() {
    this.setState({showOverlay: true})
  }
  onMouseLeave() {
    this.setState({showOverlay: false})  
  }


  render() {
    var style = this.getStyle()
    //Note: the mouse handlers are used on the img/popover instead of the container
    //so that when a movie is removed, the onEnter handlers will be triggered as
    //the mouse moves between the popover and img
    return (
      <div style={style.container}>

        <img src={this.props.img} 
          style={style.img}
          alt={this.props.title}
          onMouseEnter={this.onMouseEnter.bind(this)}
          onMouseLeave={this.onMouseLeave.bind(this)}/>
          
        <Popover show={this.state.showOverlay}
          onMouseEnter={this.onMouseEnter.bind(this)}
          onMouseLeave={this.onMouseLeave.bind(this)}>
          {this.props.children}
        </Popover>
      </div>
    )
  }
}


export default Movie