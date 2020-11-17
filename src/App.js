import React, { Component } from "react";
import Menu from "./Components/menu";
import Note from "./Components/note";
import NoteList from "./Components/noteList";
import "./App.css";
class App extends Component {
  state = {};
  render() {
    return (
      <div className="container-fluid container--fullHight">
        <div className="row">
          <Menu />
          <NoteList />
          <Note />
        </div>
      </div>
    );
  }
}

export default App;
