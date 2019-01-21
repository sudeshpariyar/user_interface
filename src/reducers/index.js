// import { getNews } from "../actions/index";

let defaultState = {
  isLoaded: false,
  news: 'news'
};

const mainReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "NEWS":
      return {
        ...state,
        isLoaded: true,
        news: action.payload
      };
    default:
      return state;
  }
};
export default mainReducer;
