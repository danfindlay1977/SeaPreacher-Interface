import React from "react";
import "./toolbar.css";
import ButtonBar from "../../../components/Button-bar/buttonBar";

const Toolbar = (props) => {
  return (
    <section className="toolbar">
      <section className="logo">
        <h2>{props.title}</h2>
      </section>
      <section className="system-controls">
        <button>Lights on/off</button>
        <ButtonBar click={props.click} />
      </section>
      <section className="basic-controls">
        <button>Poweroff</button>
        <button onClick={props.logOut}>Sign Out</button>
      </section>
    </section>
  );
};

export default Toolbar;
