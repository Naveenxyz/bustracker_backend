var app = require("express")();
const bus = require("./models/bus_status");
const express = require("express");
var server = require("http").Server(app);
var io = require("socket.io")(server);
const path = require("path");
const busmodel = require("./models/bus_status");
const userModelFinal = require("./models/user_model_final");
const usermodel = require("./models/user");
const busmodel_lastseen = require("./models/bus_status_lastseen");
// const logger = require('./logger');
app.use(express.json());
app.use(
  express.urlencoded({
    extended: false
  })
);
global.a;
global.a = 100;
app.use("/", require("./api/rest_api"));
app.use("/bus/", require("./api/bus_api"));
app.use("/busLastseen/", require("./api/bus_lastseen"));
app.get("/socket", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});
busmodel
  .find({
    _id: "bus"
  })
  .then(doc => {
    global.a = doc;
    console.log(doc);
  });
console.log(global.a);
console.log(a);
io.on("connection", function(socket) {
  console.log("jklghj");
  busmodel
    .find({
      _id: "bus"
    })
    .then(doc => {
      console.log(doc);
      setInterval(() => {
        socket.emit("bus_location", doc[0]);
      }, 1000);
    })
    .catch(err => {
      res.status(500).json(err);
    });
  io.emit("news", {
    hello: "world this thing works"
  });
  socket.on("my_location", data => {
    data = JSON.parse(data);
    let model = new userModelFinal(data);
    model.save();
    console.log(data);
  });
  socket.on("my other event", function(data) {
    data = JSON.parse(data);
    console.log(data);
    console.log("hbjk");
  });
  socket.on("disconnect", () => {
    console.log("disconnected");
  });
});
const PORT = process.env.PORT || 8080;
server.listen(PORT, "0.0.0.0", () =>
  console.log(`server started on port ${[PORT]}`)
);
