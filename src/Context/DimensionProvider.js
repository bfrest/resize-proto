import React, { Component } from "react";

// make new context
const DimensionContext = React.createContext();

class DimensionProvider extends Component {
  state = {
    parentMeasurements: {},
    childMeasurements: {}
    // updateDimensions: () => {
    //   this.setState({ myWidth: window.innerWidth, myHeight: window.innerHeight });
    // }
  };

  render() {
    return (
      <DimensionContext.Provider value={{ state: this.state }}>
        {
          /* this allows all children to access it  */
          this.props.children
        }
      </DimensionContext.Provider>
    );
  }
}

export default DimensionProvider;
