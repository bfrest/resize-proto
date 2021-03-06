import React, { Component } from "react";
import "./Child1.css";
import ResizeObserver from "react-resize-observer";

class Child1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myHeight: null,
      myWidth: null
    };

    this.childRef = React.createRef();
  }

  render() {
    if (this.state.myWidth < 400) {
      if (this.childRef.current) {
        this.childRef.current.classList.add("orange");
      }
    } else {
      if (this.childRef) {
        this.childRef.current.classList.remove("orange");
      }
    }
    return (
      <div className="child1" ref={this.childRef}>
        {/* This is the react-resize-observer, 
        you can put an inline function that runs every time
        the component is resized like I have below.
        and you can get your values from passing the rect.
        */}
        <ResizeObserver
          onResize={rect => {
            this.setState({
              myHeight: Math.round(rect.height),
              myWidth: Math.round(rect.width)
            });
          }}
        />
        <h1>{`Parent width: ${this.props.dimensions.parentWidth}`}</h1>
        <h1>{`Parent height: ${this.props.dimensions.parentHeight}`}</h1>
        <h1>{`My width ${this.state.myWidth}`}</h1>
        <h1>{`My height ${this.state.myHeight}`}</h1>
        <p>I'm the child Component, resize me below 400px</p>
      </div>
    );
  }
}

export default Child1;
