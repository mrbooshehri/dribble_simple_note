import React, { Component } from "react";
class Note extends Component {
  state = {};
  render() {
    return (
      <div className="col-6">
        <h1>title</h1>
        <h5>body</h5>
        <button className="btn btn-primary">Click me</button>
      </div>
    );
  }
}

export default Note;
