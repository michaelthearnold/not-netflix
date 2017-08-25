import React, { Component } from 'react'

//Popover to be displayed under Movie components
class Popover extends Component {
  getStyle() {
    //compute css properties
    var transition = "opacity .2s linear"
    var opacity = this.props.show ? 1 : 0

    return {
      container: {
        ...this.props.style,

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
      <div style={style.container}
        onMouseEnter={this.props.onMouseEnter}
        onMouseLeave={this.props.onMouseLeave}>
        {this.props.children}
      </div>
    )
  }
}


export default Popover