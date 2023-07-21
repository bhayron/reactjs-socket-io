export default (io, socket) => {
  const createdMessage = (msg) => {
    socket.broadcast.emit("new:strategy", msg);
  };

  socket.on("new:strategy", createdMessage);
};
