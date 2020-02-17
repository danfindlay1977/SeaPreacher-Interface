import React from "react";
import LoginForm from "./Login-form/Login-form";
import Header from "../../components/Header/Header";
import ContactForm from "./Contact-form/Contact-form";
import Axios from "axios";
import "./Login.css";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "SeaPreacher",
      currentPasscode: "",
      url: "",
      auth: false,
      errorMessage: ""
    };
  }
  componentDidMount() {
    Axios.get("http://localhost:8000/").then((res) => {
      console.log(res.data.url);
      this.setState({ url: res.data.url });
    });
  }

  handleChange = (e) => {
    const value = e.target.value;
    this.setState({ [e.target.name]: value });
  };

  handlePasscodeForm = (e) => {
    e.preventDefault();
    const user = {
      userPin: this.state.currentPasscode
    };
    Axios.post("http://localhost:8000/", { user }).then((res) => {
      console.log(res.data.auth);
      if (res.data.auth) {
        this.setState({ auth: true });
        this.props.history.replace("/cockpit");
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
