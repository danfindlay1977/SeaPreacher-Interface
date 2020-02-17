const express = require("express");
const app = express();
const cors = require("cors");
const socketio = require("socket.io");
const port = 8000;
app.use(cors());
app.use(express.json());

const expressServer = app.listen(port, () => {
  console.log("app running on", port);
});
const io = socketio(expressServer);

app.use("/auth", require("./api/auth"));
