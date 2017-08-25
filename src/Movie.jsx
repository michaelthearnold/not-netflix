import React, { Component } from 'react'
import ReactDOM from "react-dom"
import * as Bs from 'react-bootstrap'
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
  

  //we need to tap into the mouse enter/leave to prevent the popover
  //from hiding when it is moused over
  onMouseEnter() {
    this.setState({showOverlay: true})
  }
  onMouseLeave() {
    this.setState({showOverlay: false})  
  }


  render() {
    var style = this.getStyle()
    return (
      <div style={style.container} 
        onMouseEnter={this.onMouseEnter.bind(this)}
        onMouseLeave={this.onMouseLeave.bind(this)}
        ref="container">

        <img src={this.props.img} 
          style={style.img}
          alt={this.props.title}/>

        <Bs.Overlay show={this.state.showOverlay}          
          placement="bottom"
          target={() => ReactDOM.findDOMNode(this.refs.container)}>
          
          <Popover onMouseLeave={this.onMouseLeave.bind(this)}
            onMouseEnter={this.onMouseEnter.bind(this)}
            show={this.state.showOverlay}>
            {this.props.children}
          </Popover>
        </Bs.Overlay>
      </div>
    )
  }
}


export default Movie