import React from "react";

const Grabber = (props) => {
  return (
    <form className="sliderForm">
      <p>
        Thiis slider opens and closes the claw grabber. It works on a scale of 1
        to ten{" "}
      </p>
      <input
        type="range"
        value={props.grabberValue}
        onChange={props.onChangeSlider}
        className="slider"
        min="0"
        max="10"
      />
      <label>{props.grabberValue}</label>
    </form>
  );
};
export default Grabber;
