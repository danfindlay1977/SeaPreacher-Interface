import React from "react";
const ContactForm = (props) => {
  return (
    <form onSubmit={props.handleContactForm}>
      <label>Enter E-mail Address</label>
      <input
        name="email"
        type="email"
        onChange={props.change}
        value={props.email}
      />
      <input type="submit" />
    </form>
  );
};
export default ContactForm;
