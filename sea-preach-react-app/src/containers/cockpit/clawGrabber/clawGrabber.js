import React from "react";
const Grabber = () => {
  return (
    <form>
      <input
        type="range"
        min="0"
        max="10"
        value="0"
        class="slider"
        id="grabber-range"
      />
    </form>
  );
};
export default Grabber;
