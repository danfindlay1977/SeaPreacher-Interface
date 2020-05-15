import React from "react";
import "./login-form.css";
const LoginForm = (props) => {
  return (
    <div>
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
      <button onclick="location.href='https://google.com'">
        Google chrome Authenticator exestion
      </button>
    </div>
  );
};
export default LoginForm;
