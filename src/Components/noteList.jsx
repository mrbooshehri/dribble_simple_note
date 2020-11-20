import React, { Component } from "react";
import NoteListItem from "./noteListItem";

let note = {
  title: "title area",
  body: "there will be some text here:)",
  time: "12 Nov",
};
class NoteList extends Component {
  state = {};
  render() {
    return (
      <div className="col-4 p-0 noteList">
        <NoteListItem note={note} />
        <NoteListItem note={note} />
        <NoteListItem note={note} />
        <NoteListItem note={note} />
        <NoteListItem note={note} />
        <NoteListItem note={note} />
        <NoteListItem note={note} />
        <NoteListItem note={note} />
      </div>
    );
  }
}

export default NoteList;
