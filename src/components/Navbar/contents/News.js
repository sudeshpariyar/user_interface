import React, { Component } from "react";
import { connect } from "react-redux";
import { getNews } from "../../../actions/index";
import { store } from "../../../index";

class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: null,
      isLoaded: false
    };
  }
  async componentDidMount() {
    store.dispatch(getNews());
    this.setState({
      isLoaded: true
    });
    console.log(this.state.isLoaded, this.props.posts);
  }

  render() {
    const header = {
      position: "fixed",
      z_index: "1",
      height: "50px",
      width: "60%",
      background: "white",
      float: "top",
      color: "orangered",
      marginBottom: "100px"
    };
    const every_component = {
      marginTop: "55px",
      color: "black",
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
    var { isLoaded, news } = this.props;
    if (!isLoaded || !news) {
      return <div className="content">It is loading.....</div>;
    } else {
      return (
        <div className="content">
          <div className="content-header" style={header}>
            <h2>News</h2>
          </div>
          {news.posts.map(each_news => (
            <div
              className="each-content"
              style={every_component}
              key={each_news.uuid}
              text={each_news.text}
            >
              <h3>{each_news.title}</h3>
              <div>
                <img
                  src={each_news.thread.main_image}
                  alt=""
                  style={image_style}
                />
              </div>
              <div className="text" style={text_style}>
                {each_news.text.length > MAX_LENGTH ? (
                  <div>
                    {`${each_news.text.substring(0, 400)}...`}
                    <a href={each_news.url}>Fullstory</a>
                  </div>
                ) : (
                  <p>{each_news.text}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      );
    }
  }
}
const mapStateToProps = state => {
  return {
    posts: state.news
  };
};

export default connect(
  mapStateToProps,
  { getNews }
)(News);
