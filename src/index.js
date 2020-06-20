import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import Counter from "./Counter.js";
import { store } from "./store.js";

const App = () => (
  <Provider store={store}>
    <Counter />
  </Provider>
);

render(<App />, document.getElementById("root"));
