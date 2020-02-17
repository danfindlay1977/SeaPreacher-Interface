import React from "react";
import "./toolbar.css";

const Toolbar = (props) => {
  return (
    <section className="toolbar">
      <section className="logo">
        <h1>{props.title}</h1>
      </section>
      <section className="system-controls">
        <button>Lights on/off</button>
        <form>
          <select>
            <option value="Cockpit">Cockpit</option>
            <option value="Explore">Explore</option>
          </select>
        </form>
      </section>
      <section className="basic-controls">
        <button>Poweroff</button>
        <button>Sign Out</button>
      </section>
    </section>
  );
};

export default Toolbar;
