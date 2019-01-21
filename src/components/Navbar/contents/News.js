import React, { Component } from "react";
import { connect } from "react-redux";
import { getNews } from "../../../actions/index";

class News extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     news: null,
  //     isLoaded: false
  //   };
  // }
  async componentDidMount() {
    // const url =
    //   "http://webhose.io/filterWebContent?token=f45b00db-4f90-4c45-b0ae-204afa574b3a&format=json&sort=crawled&q=stock%20market%20language%3Aenglish";
    // const response = await fetch(url);
    // const data = await response.json();
    // this.setState({
    //   isLoaded: true,
    //   news: data
    // });
    this.props.getNews();
    console.log(this.props.isLoaded,this.props.news);
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
    } // const url =
    //   "http://webhose.io/filterWebContent?token=f45b00db-4f90-4c45-b0ae-204afa574b3a&format=json&sort=crawled&q=stock%20market%20language%3Aenglish";
    // const response = await fetch(url);
    // const data = await response.json();
    // this.setState({
    //   isLoaded: true,
    //   news: data
    // });
  }
}
const mapStateToProps = state => {
  return {
    isLoaded: state.isLoaded,
    posts: state.news
  };
};

export default connect(
  mapStateToProps,
  { getNews }
)(News);
