const express = require("express");
const app = express();
const cors = require("cors");
const socketio = require("socket.io");
const si = require("systeminformation");
const port = 8000;
// * for testing only *
app.use(cors());
app.use(express.json());
const raspividStream = require("raspivid-stream");

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

const wss = require("express-ws")(app);

app.get("/", (req, res) => res.sendFile(__dirname + "/index.html"));

app.ws("/video-stream", (ws, req) => {
  console.log("Client connected");
  ws.send(
    JSON.stringify({
      action: "init",
      width: "960",
      height: "540",
    })
  );

  var videoStream = raspividStream({ rotation: 180 });

  videoStream.on("data", (data) => {
    ws.send(data, { binary: true }, (error) => {
      if (error) console.error(error);
    });
  });

  ws.on("close", () => {
    console.log("Client left");

    videoStream.removeAllListeners("data");
  });
});
