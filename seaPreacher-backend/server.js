const express = require("express");
const app = express();
const cors = require("cors");
const socketio = require("socket.io");
const si = require("systeminformation");
const port = 8000;
// * for testing only *
app.use(cors());
app.use(express.json());

const expressServer = app.listen(port, () => {
  console.log("app running on", port);
});

const io = socketio(expressServer);

// serves react webpack build only for production
//app.use(express.static("build", { extensions: ["html"] }));

app.use("/auth", require("./api/auth"));

//app.use("/sys", require("./api/sys"));

// web sockot events
io.on("connect", (socket) => {
  console.log("made a connection");
  socket.on("left", () => {
    console.log("left on server");
  });
  socket.on("right", () => {
    console.log("right on server");
  });
  socket.on("forward", () => {
    console.log("forward on server");
  });
  socket.on("reverse", () => {
    console.log("reverse on server");
  });
  socket.on("stop", () => {
    console.log("stop on server");
  });
});

async function batteryData() {
  try {
    const data = await si.battery();
    console.log(data.percent);
  } catch (e) {
    console.log(e);
  }
}

async function wifiData() {
  try {
    const data = await si.wifiNetworks();
    console.log(data[0].ssid);
  } catch (e) {
    console.log(e);
  }
}

batteryData();
wifiData();
