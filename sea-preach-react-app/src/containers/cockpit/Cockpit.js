import React from "react";
import Toolbar from "./Toolbar/Toolbar";
import Sidebar from "./Sidebar/Sidebar";
import VideoPlayer from "./VideoPlayer/VideoPlayer";
import Infobar from "./Infobar/Inforbar";
import KeyPad from "./Keypad/keypad";
import "./cockpit.css";
import Header from "../../components/Header/Header";

class Cockpit extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="cockpit">
        <Toolbar title={this.props.title} />
        <VideoPlayer />
        <Sidebar />
        <KeyPad />
        <Infobar />
      </div>
    );
  }
}

export default Cockpit;
