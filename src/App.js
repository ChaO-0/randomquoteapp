import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./components/redux/store";
import SimpleCard from "./components/SimpleCard";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <SimpleCard />
      </Provider>
    );
  }
}

export default App;
