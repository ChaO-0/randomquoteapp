import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./components/redux/store";
import SimpleCard from "./components/SimpleCard";
import "./App.css";

// Class component untuk memenuhi syarat kedua dimana harus terdapat class component
class App extends Component {
  render() {
    return (
      // Provider untuk melakukan connect terhadap redux dengan react
      <Provider store={store}>
        <SimpleCard />
      </Provider>
    );
  }
}

export default App;
