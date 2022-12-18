const app = require("express")();
const http = require("http").Server(app);
const io = require("socket.io")(http);

app.get("/", (req: any, res: any) => {
  res.sendFile(__dirname + "/index.html");
});

io.on("connection", (socket: any) => {
  socket.on("chat message", (msg: any) => {
    io.emit("chat message", msg);
  });
});

http.listen(3000, () => {
  console.log("listening on *:3000");
});
