import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div>
        <div className="top-nav-bar">
          <div className='a'>
            <NavLink to="/">News</NavLink>
          </div>
          <div className='a'>
            <NavLink to="/calender">Calender</NavLink>
          </div>
          <div className='a'>
            <NavLink to="/rashifal">Rashifal</NavLink>
          </div>
          <div className='a'>
            <NavLink to="/weather">Weather</NavLink>
          </div>
          <div className='a'>
            <NavLink to="/blog">Blog</NavLink>
          </div>
          <div className='a'>
            <NavLink to="/about">About</NavLink>
          </div>
        </div>
      </div>
    );
  }
}
export default Navbar;
