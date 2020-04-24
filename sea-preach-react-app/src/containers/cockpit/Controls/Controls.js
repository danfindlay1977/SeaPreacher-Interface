import React from "react";
import {
  FaArrowDown,
  FaArrowLeft,
  FaArrowRight,
  FaArrowUp
} from "react-icons/fa";
const Controls = (props) => {
  return (
    <section className="controls">
      <FaArrowUp onClick={props.forward} className="up control" size="2em" />
      <FaArrowDown
        onClick={props.reverse}
        className=" down control"
        size="2em"
      />
      <FaArrowLeft onClick={props.left} className="left control" size="2em" />
      <FaArrowRight
        onClick={props.right}
        className="right control"
        size="2em"
      />
    </section>
  );
};
export default Controls;
