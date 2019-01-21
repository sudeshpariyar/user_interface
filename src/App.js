import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import SideNavbar from "./components/Side-Navbar/SideNavbar";

import News from "./components/Navbar/contents/News";
import Calender from "./components/Navbar/contents/Calender";
import Rashifal from "./components/Navbar/contents/Rashifal";
import Weather from "./components/Navbar/contents/Weather";
import Blog from "./components/Navbar/contents/Blog";
import About from "./components/Navbar/contents/About";

import Entertainment from "./components/Side-Navbar/contents/Entertainment";
import Health from "./components/Side-Navbar/contents/Health";
import Politics from "./components/Side-Navbar/contents/Politics";
import Sports from "./components/Side-Navbar/contents/Sports";
import Technology from "./components/Side-Navbar/contents/Technology";
import TopStories from "./components/Side-Navbar/contents/TopStories";
import World from "./components/Side-Navbar/contents/World";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="app-component">
          <Navbar />
          <SideNavbar />
          <Switch>
            <Route path="/" component={News} exact />
            <Route path="/calender" component={Calender} />
            <Route path="/rashifal" component={Rashifal} />
            <Route path="/weather" component={Weather} />
            <Route path="/blog" component={Blog} />
            <Route path="/about" component={About} />

            <Route path="/entertainment" component={Entertainment} />
            <Route path="/health" component={Health} />
            <Route path="/politics" component={Politics} />
            <Route path="/sports" component={Sports} />
            <Route path="/technology" component={Technology} />
            <Route path="/topstories" component={TopStories} />
            <Route path="/world" component={World} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
