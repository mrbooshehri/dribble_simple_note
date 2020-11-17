import React, { Component } from "react";
import MenuItem from "./menuItem";
import MenuIcon from "@material-ui/icons/Menu";
import "../App.css";
class Menu extends Component {
  state = {};
  render() {
    return (
      <div className="col-2 p-0 menu menu--fullHight">
        <button className="menu__button">
          <MenuIcon />
        </button>
        <div className="mt-4 ml-3">
          <MenuItem title="Personal" />
          <MenuItem />
          <MenuItem />
        </div>
      </div>
    );
  }
}

export default Menu;
