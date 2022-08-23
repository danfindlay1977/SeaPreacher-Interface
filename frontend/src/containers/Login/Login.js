import React from "react";
import LoginForm from "./Login-form/Login-form";
import Header from "../../components/Header/Header";
import ContactForm from "./Contact-form/Contact-form";
import Axios from "axios";
import "./Login.css";
import auth from "../../auth";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "SeaPreacher",
      currentPasscode: "",
      url: "",
      errorMessage: "",
    };
  }
  componentDidMount() {
    Axios.get("/auth").then((res) => {
      console.log(res.data.url);
      this.setState({ url: res.data.url });
    });
  }

  // handle changes in input form
  handleChange = (e) => {
    const value = e.target.value;
    this.setState({ [e.target.name]: value });
  };

  handlePasscodeForm = (e) => {
    e.preventDefault();
    const user = {
      userPin: this.state.currentPasscode,
    };
    Axios.post("/auth", { user }).then((res) => {
      if (res.data.auth) {
        auth.logIn(() => {
          this.props.history.replace("/cockpit");
        });
      } else {
        this.setState({ errorMessage: "This is the incorrect pin" });
      }
    });

    // compare new passcode to current passcode
  };
  render() {
    return (
      <div className="page">
        <Header title={this.state.title} />
        <section className="main">
          <LoginForm
            qrUrl={this.state.url}
            passcode={this.passcode}
            change={this.handleChange}
            submit={this.handlePasscodeForm}
            error={this.state.errorMessage}
          />
        </section>
      </div>
    );
  }
}

export default Login;
