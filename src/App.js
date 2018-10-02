import React, { Component } from "react";
import "./App.css";
import $ from "jquery";
import MovieDisp from "./movie.js";
import "bootstrap/dist/css/bootstrap.css";
import Tracker from "./tracker";

//let data;

class App extends Component {
  state = {
    movieRows: [],
    length: null,
    reserve: 0
  };

  constructor(props) {
    super(props);

    this.retrieve = this.retrieve.bind(this);
    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
    this.retrieve();
  }

  handleIncrement() {
    console.log("finally");
    let res = this.state.reserve + 1;
    this.setState({ reserve: res });
  }

  handleDecrement() {
    console.log("finally");
    let res = this.state.reserve - 1;
    this.setState({ reserve: res });
  }

  retrieve() {
    const url = "https://movie-rental-51a59.firebaseio.com/movies.json";

    $.ajax({
      url: url,
      success: data => {
        //data = JSON.parse(data);
        //data = data1[0].name;
        console.log(data.length);

        //let hey = "hello";
        //console.log(hey);

        this.setState({ length: data.length });
        let movies = [];
        let id = "move";
        let i = 0;

        //console.log("here bud");

        console.log(id + i);

        data.forEach(element => {
          console.log(element.name);
          movies.push(
            <MovieDisp
              info={element}
              id={id + i}
              inc={this.handleIncrement}
              dec={this.handleDecrement}
            />
          );
          i++;
        });
        //console.log(data1[0].name);
        //const
        console.log(movies);

        this.setState({ movieRows: movies });
      },
      error: (xhr, status, err) => {
        console.log("failed");
      }
    });
  }

  render() {
    return (
      <div>
        <table className="nav">
          <tbody>
            <tr>
              <td>
                <img width="50" src="logo.jpeg" alt="logo" />
              </td>
              <td id="title">
                <h2>Movie Rental</h2>
              </td>
            </tr>
          </tbody>
        </table>
        <Tracker length={this.state.length} reserve={this.state.reserve} />

        {this.state.movieRows}
      </div>
    );
  }
}

export default App;
