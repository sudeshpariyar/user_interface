import { NEWS } from "./type";
import axios from "axios";


const apiUrl =
  "http://webhose.io/filterWebContent?token=f45b00db-4f90-4c45-b0ae-204afa574b3a&format=json&sort=crawled&q=stock%20market%20language%3Aenglish";

export const getNews = () => {
  return (dispatch) => {
    return axios.post(`${apiUrl}`)
      .then(response => {
        dispatch(getNewsSuccess(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};

export const getNewsSuccess =(data) => {
  return {
    type: NEWS,
    payload: data
     }      
};
