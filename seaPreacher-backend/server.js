const express = require("express");
const app = express();
const cors = require("cors");
const socketio = require("socket.io");
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
