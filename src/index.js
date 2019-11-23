import React from "react";
import ReactDOM from "react-dom";
import Display from "./Components/Display";
import "./styles.css";
import { Provider } from "react-redux";
import Store from "./Store/Store";

function App() {
  return (
    <div className="App">
      <Display />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={Store}>
    <App />
  </Provider>,
  rootElement
);
