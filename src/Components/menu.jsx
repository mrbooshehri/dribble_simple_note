import React, { Component } from "react";
import MenuItem from "./menuItem";
import MenuIcon from "@material-ui/icons/Menu";
import "../App.css";
class Menu extends Component {
  state = {};
  render() {
    return (
      <div className="col-2 p-0 menu menu--fullHight">
        <a href="#" className="menu__button ">
          <MenuIcon />
        </a>
        <div className="mt-3">
          <MenuItem title="Personal" isVisible="visible" />
          <MenuItem title="Work" isVisible="invisible" />
          <MenuItem title="Up coming" isVisible="invisible" />
        </div>
      </div>
    );
  }
}

export default Menu;
