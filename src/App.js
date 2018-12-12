import React, { Component } from "react";
import Child1 from "./components/Child1/Child1";
import "./App.css";
import ResizeObserver from "react-resize-observer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myWidth: null,
      myHeight: null
    };
  }

  render() {
    return (
      <div className="App">
        <ResizeObserver
          onResize={rect => {
            this.setState({
              myHeight: Math.round(rect.height),
              myWidth: Math.round(rect.width)
            });
          }}
        />
        <h1>{`My width ${this.state.myWidth}`}</h1>
        <h1>{`My height ${this.state.myHeight}`}</h1>
        <Child1 dimensions={{ parentHeight: this.state.myHeight, parentWidth: this.state.myWidth }} getDimension={this.getDimensions} />
      </div>
    );
  }
}

export default App;
