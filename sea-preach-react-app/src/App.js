import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Login from "./containers/Login/Login";
import Cockpit from "./containers/cockpit/Cockpit";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "SeaPreacher"
    };
  }

  render() {
    return (
      <BrowserRouter>
        <Route
          path="/"
          exact
          render={(props) => <Login {...props} title={this.state.title} />}
        />
        <Route
          path="/cockpit"
          exact
          render={(props) => <Cockpit {...props} title={this.state.title} />}
        />
      </BrowserRouter>
    );
  }
}

export default App;
