import React, { Component } from "react";
import store from "./store";
import {Provider} from "react-redux"
import Header from "./common/Header";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Header />
      </Provider>
    );
  }
}

export default App;
