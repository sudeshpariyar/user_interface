import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class SideNavbar extends Component {
  render() {
    return (
      <div className="Side-Nav-bar">
        <h3>APP name</h3>
        <li>
          <div className="a">
            <NavLink to="/topstories">Top Stories</NavLink>
          </div>
        </li>
        <li>
          <div className="a">
            <NavLink to="/sports">Sports</NavLink>
          </div>
        </li>
        <li>
          <div className="a">
            <NavLink to="/politics">Politics</NavLink>
          </div>
        </li>
        <li>
          <div className="a">
            <NavLink to="/technology">Technology</NavLink>
          </div>
        </li>
        <li>
          <div className="a">
            <NavLink to="/world">World</NavLink>
          </div>
        </li>
        <li>
          <div className="a">
            <NavLink to="/health">Health</NavLink>
          </div>
        </li>
        <li>
          <div className="a">
            <NavLink to="/entertainment">Entertainment</NavLink>
          </div>
        </li>
      </div>
    );
  }
}

export default SideNavbar;
