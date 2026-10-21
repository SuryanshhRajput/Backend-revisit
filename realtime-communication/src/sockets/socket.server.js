import { Server } from "socket.io";

export default function initialiseSocket(httpServer) {
  const io = new Server(httpServer);

  io.on("connection", (socket) => {
    console.log("A user connected", socket.id);

    socket.on("elon", (msg) => {
      console.log("Elon event received some message: -> ", msg);
      socket.emit("musk");
    });

    socket.on("disconnect", () => {
      console.log("A user disconnected", socket.id);
    });
  });
}
