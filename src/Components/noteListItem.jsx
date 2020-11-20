import React, { Component } from "react";
class NoteListItem extends Component {
  state = {};
  render(props) {
    return (
      <div className="noteListItem">
        <div className="noteListItem__header">
          <h4 className="noteListItem__header__title">
            {this.props.note.title}
          </h4>
          <h6 className="noteListItem__header__time">{this.props.note.time}</h6>
        </div>
        <p className="noteListItem__body">{this.props.note.body}</p>
      </div>
    );
  }
}

export default NoteListItem;
