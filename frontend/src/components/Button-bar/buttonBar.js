import React from "react";

const ButtonBar = (props) => {
  return (
    <section className="button-bar">
      <section onClick={props.click} className="cockpit-btn">
        Cockpit
      </section>
      <section onClick={props.click}>Claw Grabber</section>
    </section>
  );
};
export default ButtonBar;
