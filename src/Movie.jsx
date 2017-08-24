import React, { Component } from 'react'
import * as Bs from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'


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
  

  //we need to tap into the mouse enter/leave on the popover
  //to prevent it from hiding when the popover is moused over
  onPopoverMouseEnter() {
    this.refs.popover.show()
  }
  onPopoverMouseLeave() {
    this.refs.popover.hide()
  }


  getPopover() {
    return (
      <Bs.Popover id="moviePopover"
        onMouseEnter={this.onPopoverMouseEnter.bind(this)}
        onMouseLeave={this.onPopoverMouseLeave.bind(this)}>

        {this.props.children}
      </Bs.Popover>
    )
  }


  render() {
    var style = this.getStyle()
    return (
      <div style={style.container}>
        <Bs.OverlayTrigger placement="bottom"
          overlay={this.getPopover()}
          ref="popover">

          <img src={this.props.img} 
            style={style.img}
            alt={this.props.title}/>
        </Bs.OverlayTrigger>
      </div>
    )
  }
}


export default Movie