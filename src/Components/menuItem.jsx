import React, { Component } from "react";
import "../App.css";
class MenuItem extends Component {
  state = {};
  render(props) {
    return (
      <div className="menuItem">
        <span className={this.props.isVisible}>xx</span>
        <a href="#">{this.props.title}</a>
      </div>
    );
  }
}

export default MenuItem;
