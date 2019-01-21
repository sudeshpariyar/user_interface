import React, { Component } from "react";

class Technology extends Component {
  constructor(props) {
    super(props);
    this.state = {
      technologies: null,
      isLoaded: false
    };
  }
  async componentDidMount() {
    const url =
      "http://webhose.io/filterWebContent?token=f45b00db-4f90-4c45-b0ae-204afa574b3a&format=json&ts=1547550837171&sort=crawled&q=technology%20ces%20google%20apple%20samsung";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({
      isLoaded: true,
      technologies: data
    });
  }

  render() {
    const header = {
      position: "fixed",
      z_index: "1",
      height: "50px",
      width: "60%",
      background: "white",
      float: "top",
      marginBottom: "100px"
    };
    const every_component = {
      marginTop: "55px",
      color: "brown",
      height: "200px",
      borderBottom: "1px solid grey"
    };
    const image_style = {
      height: "100px",
      width: "150px",
      float: "right",
      marginTop: "10px"
    };
    const text_style = {
      textDecoration: "none",
      color: "grey"
    };
    const MAX_LENGTH = 500;
    var { isLoaded, technologies } = this.state;
    if (!isLoaded || !technologies) {
      return <div className="content">It is loading.....</div>;
    } else {
      return (
        <div className="content">
          <div className="content-header" style={header}>
            <h2>Technology</h2>
          </div>
          {technologies.posts.map(technology => (
            <div
              className="each-content"
              style={every_component}
              key={technology.uuid}
              text={technology.text}
            >
              <h3>{technology.title}</h3>
              <div>
                <img
                  src={technology.thread.main_image}
                  alt=""
                  style={image_style}
                />
              </div>
              <div className="text" style={text_style}>
                {technology.text.length > MAX_LENGTH ? (
                  <div>
                    {`${technology.text.substring(0, 500)}...`}
                    <a href={technology.url}>Fullstory</a>
                  </div>
                ) : (
                  <p>{technology.text}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      );
    }
  }
}

export default Technology;
