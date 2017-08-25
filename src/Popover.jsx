import React, { Component } from 'react'


//Generic movie component to be used for myList and recommendations.
//Expects the properties title and img.
//Its children will be displayed below the movie image as a popover on hover.
class Popover extends Component {
  getStyle() {
    //compute css properties
    var transition = "opacity .2s linear"
    var opacity = this.props.show ? 1 : 0
    
    return {
      container: {
        ...this.props.style,
        position: 'absolute',
        backgroundColor: "white",
        padding: "4px 10px",
        borderRadius: "0 0 5px 5px",
        border: '1px solid #CCC',
        borderTop: "none",
        boxShadow: '0 5px 10px rgba(0, 0, 0, 0.4)',

        WebkitOpacity: opacity,
        MozOpacity: opacity,
        opacity: opacity,

        WebkitTransition: transition,
        MozTransition: transition,
        MsTransition: transition,
        OTransition: transition,
        transition: transition
      }
    }
  }


  render() {
    var style = this.getStyle()
    //dont display anything if there's nothing in the popover
    if(!this.props.children)
      return null

    return (
      <div
        style={style.container}
        onMouseEnter={this.props.onMouseEnter}
        onMouseLeave={this.props.onMouseLeave}>

        {this.props.children}
      </div>
    )
  }
}


export default Popover