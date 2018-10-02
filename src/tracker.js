import React, { Component } from "react";

class Tracker extends Component {
  render() {
    return (
      <React.Fragment>
        <p>
          The total no of movies:
          {this.props.length}
        </p>
        <p>
          The total no of reserved movies:
          {this.props.reserve}
        </p>
      </React.Fragment>
    );
  }
}

export default Tracker;
