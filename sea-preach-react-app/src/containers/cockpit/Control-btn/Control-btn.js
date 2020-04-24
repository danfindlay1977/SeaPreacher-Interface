import React from "react";

const ControlBtn = (props) => {
  return (
    <section className="control-btn">
      <button onClick={props.start} className="start">
        Start
      </button>
      <button onClick={props.stop} className="stop">
        Stop
      </button>
    </section>
  );
};

export default ControlBtn;
