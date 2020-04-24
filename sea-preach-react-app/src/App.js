import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Login from "./containers/Login/Login";
import Cockpit from "./containers/cockpit/Cockpit";
import auth from "./auth";
import PrivateRoute from "./components/PrivateRoute";
import Axios from "axios";

import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "SeaPreacher",
      locked: false
    };
  }
  // log user out and re-direct them home
  logOutHandler = () => {
    alert("msg");
    auth.logOut(() => {
      Axios.put("http://localhost:8000/auth/signOut", {
        auth: false
      }).then(() => {
        this.setState({ locked: false });
      });
    });
  };
  render() {
    // check if there is a user currently logged in
    let loggedin;
    if (!auth.getAuth()) {
      loggedin = (
        <Route
          path="/"
          exact
          render={(props) => <Login {...props} title={this.state.title} />}
        />
      );
    } else {
      loggedin = (
        <Route path="/" exact render={() => <h1>User logged in</h1>} />
      );
    }

    return (
      <BrowserRouter>
        {loggedin}
        <PrivateRoute
          title={this.state.title}
          logOut={this.logOutHandler}
          path="/cockpit"
          exact
          component={Cockpit}
        />
      </BrowserRouter>
    );
  }
}

export default App;
