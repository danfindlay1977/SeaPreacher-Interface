import React from "react";
import "./Header.css";

const Header = (props) => {
  return (
    <React.Fragment>
      <header>
        <h1>{props.title}</h1>
        <p>
          This is a web interface which allows a single user to control the Sea
          preacher ROV submirne
        </p>
        <p>Scan the barcode to get a single use code using google auth</p>
      </header>
    </React.Fragment>
  );
};

export default Header;
