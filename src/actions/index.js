import axios from "axios";
export const NEWS = "NEWS";

export const getNews = () => {
  const news = axios.get(
    "http://webhose.io/filterWebContent?token=f45b00db-4f90-4c45-b0ae-204afa574b3a&format=json&sort=crawled&q=stock%20market%20language%3Aenglish"
  );
  return dispatch => {
    dispatch({ type: NEWS, payload: news.posts });
  };
};

