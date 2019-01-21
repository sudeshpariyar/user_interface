import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import reducers from "./reducers/index";

let store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();

// import { createStore, combineReducers } from "redux";

// const mathReducer = (
//   state = {
//     result: 1,
//     lastvalue: []
//   },
//   action
// ) => {
//   switch (action.type) {
//     case "ADD":
//       state = {
//         ...state,
//         result: state.result + action.payload,
//         lastvalue: [...state.lastvalue, action.payload]
//       };
//       break;
//     case "SUBTRACT":
//       state = {
//         ...state,
//         result: state.result - action.payload,
//         lastvalue: [...state.lastvalue, action.payload]
//       };
//       break;
//     default:
//       break;
//   }
//   return state;
// };
// const userReducer = (
//   state = {
//     name: "asdf",
//     age: 25
//   },
//   action
// ) => {
//   switch (action.type) {
//     case "SET_AGE":
//       state = {
//         ...state,
//         age: action.payload
//       };
//       break;
//     case "SET_NAME":
//       state = {
//         ...state,
//         name: action.payload
//       };
//       break;
//     default:
//       break;
//   }
//   return state;
// };

// const store = createStore(combineReducers({ mathReducer, userReducer }));
// store.subscribe(() => {
//   console.log("store updated!", store.getState());
// });

// store.dispatch({
//   type: "ADD",
//   payload: 100
// });
// store.dispatch({
//   type: "ADD",
//   payload: 80
// });
// store.dispatch({
//   type: "SUBTRACT",
//   payload: 10
// });
