
export default function getNews(
  state = {
    news: null
  },
  action
) {
  switch (action.type) {
    case "NEWS":
      return {
        ...state,
        ...{news: action.payload}
      };
    default:
      return state;
  }
}
