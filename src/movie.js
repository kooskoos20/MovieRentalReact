import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Tracker from "./tracker.js";

class MovieDisp extends Component {
  state = {
    stat: true,
    butval: "Reserve"
  };

  constructor(props) {
    super(props);
    //this.butval = 'Reserve';

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (this.state.stat === true) {
      this.setState({ butval: "Return" });
      this.setState({ stat: false });
      this.props.inc();
    } else {
      this.setState({ butval: "Reserve" });
      this.setState({ stat: true });
      this.props.dec();
    }
  }

  render() {
    return (
      <div id={this.props.id}>
        <table>
          <tbody>
            <tr>
              <td id="gap">
                <img
                  className="poster"
                  src={this.props.info.imageUrl}
                  alt="poster"
                />
              </td>
              <td>
                <h2>{this.props.info.name}</h2>
                <p>{this.props.info.snippet}</p>
                <button
                  className="btn btn-primary btn-sm"
                  onClick={this.handleClick}
                >
                  {this.state.butval}
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default MovieDisp;
