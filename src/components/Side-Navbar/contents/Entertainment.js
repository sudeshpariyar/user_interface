import React, { Component } from "react";

class Entertainment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      entertainments: null,
      isLoaded: false
    };
  }
  async componentDidMount() {
    const url =
      "http://webhose.io/filterWebContent?token=f45b00db-4f90-4c45-b0ae-204afa574b3a&format=json&ts=1547549297031&sort=crawled&q=entertainment%20movies%20hollywood";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({
      isLoaded: true,
      entertainments: data
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
    var { isLoaded, entertainments } = this.state;
    if (!isLoaded || !entertainments) {
      return <div className="content">It is loading.....</div>;
    } else {
      return (
        <div className="content">
          <div className="content-header" style={header}>
            <h2>Entertainment</h2>
          </div>
          {entertainments.posts.map(entertainment => (
            <div
              className="each-content"
              style={every_component}
              key={entertainment.uuid}
              text={entertainment.text}
            >
              <h3>{entertainment.title}</h3>
              <div>
                <img
                  src={entertainment.thread.main_image}
                  alt=""
                  style={image_style}
                />
              </div>
              <div className="text" style={text_style}>
                {entertainment.text.length > MAX_LENGTH ? (
                  <div>
                    {`${entertainment.text.substring(0, 500)}...`}
                    <a href={entertainment.url}>Fullstory</a>
                  </div>
                ) : (
                  <p>{entertainment.text}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      );
    }
  }
}

export default Entertainment;
