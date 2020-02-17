import React from "react";
import "./login-form.css";
const LoginForm = (props) => {
  return (
    <form onSubmit={props.submit}>
      <p>{props.error}</p>
      <label>Enter Pass code</label>
      <input
        type="text"
        onChange={props.change}
        value={props.passcode}
        name="currentPasscode"
      />
      <input type="submit" value="Login" />

      <img src={props.qrUrl} alt="qr image" />
    </form>
  );
};
export default LoginForm;
