import * as React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { createStore, applyMiddleware, Store } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import reducer from "./store/reducer";
import axios from "axios";

const store: Store<TaskState, TaskAction> & {
  dispatch: DispatchType;
} = createStore(reducer, applyMiddleware(thunk));

const getData = () => {
  axios
    .get("https://api.qoutable.io/random")
    // .get("http://localhost:3000/prediction")
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <button onClick={getData}>Test get data</button>
      <App />
    </Provider>
  </React.StrictMode>
);
