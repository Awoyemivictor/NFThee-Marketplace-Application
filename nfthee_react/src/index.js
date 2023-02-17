import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

import reportWebVitals from "./reportWebVitals";
import "./Components/i18";
import App from "./App";
import reducer from './Store/reducer';
import Loader from "./Components/Loader/Loader";
// const store = createStore(reducer);
import { store } from "./redux/store.js"
const Load = () => {
  return (
    <>
      <div className="spinner">
        <span>Loading...</span>
        <div className="half-spinner"></div>
      </div></>)
}
const app = (
  <BrowserRouter>
    <React.StrictMode>
      {/* <Loader/>  */}
      <Provider store={store}>
        <Suspense fallback={<Load />}>
          <App useSuspense={true} />
        </Suspense>
      </Provider>
    </React.StrictMode>
  </BrowserRouter>
);

ReactDOM.render(app, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
