import React, { Component } from "react";

class Politics extends Component {
  constructor(props) {
    super(props);
    this.state = {
      politics: null,
      isLoaded: false
    };
  }
  async componentDidMount() {
    const url =
      "http://webhose.io/filterWebContent?token=f45b00db-4f90-4c45-b0ae-204afa574b3a&format=json&sort=social.facebook.shares&q=politics%20has_video%3Atrue";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({
      isLoaded: true,
      politics: data
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
    var { isLoaded, politics } = this.state;
    if (!isLoaded || !politics) {
      return <div className="content">It is loading.....</div>;
    } else {
      return (
        <div className="content">
          <div className="content-header" style={header}>
            <h2>Politics</h2>
          </div>
          {politics.posts.map(political => (
            <div
              className="each-content"
              style={every_component}
              key={political.uuid}
              text={political.text}
            >
              <h3>{political.title}</h3>
              <div>
                <img
                  src={political.thread.main_image}
                  alt=""
                  style={image_style}
                />
              </div>
              <div className="text" style={text_style}>
                {political.text.length > MAX_LENGTH ? (
                  <div>
                    {`${political.text.substring(0, 500)}...`}
                    <a href={political.url}>Fullstory</a>
                  </div>
                ) : (
                  <p>{political.text}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      );
    }
  }
}

export default Politics;
