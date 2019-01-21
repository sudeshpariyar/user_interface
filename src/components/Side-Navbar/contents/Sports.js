import React, { Component } from "react";

class Sports extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sports: null,
      isLoaded: false
    };
  }
  async componentDidMount() {
    const url =
      "http://webhose.io/filterWebContent?token=f45b00db-4f90-4c45-b0ae-204afa574b3a&format=json&sort=social.facebook.shares&q=sports%20soccer%20english%20premier%20league";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({
      isLoaded: true,
      sports: data
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
    var { isLoaded, sports } = this.state;
    if (!isLoaded || !sports) {
      return <div className="content">It is loading.....</div>;
    } else {
      return (
        <div className="content">
          <div className="content-header" style={header}>
            <h2>Sports</h2>
          </div>
          {sports.posts.map(sport => (
            <div
              className="each-content"
              style={every_component}
              key={sport.uuid}
              text={sport.text}
            >
              <h3>{sport.title}</h3>
              <div>
                <img src={sport.thread.main_image} alt="" style={image_style} />
              </div>
              <div className="text" style={text_style}>
                {sport.text.length > MAX_LENGTH ? (
                  <div>
                    {`${sport.text.substring(0, 500)}...`}
                    <a href={sport.url}>Fullstory</a>
                  </div>
                ) : (
                  <p>{sport.text}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      );
    }
  }
}

export default Sports;
