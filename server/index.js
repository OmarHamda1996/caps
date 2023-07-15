const http = require('http');
const server = http.createServer();
const io = require('socket.io')(server);


const capsNamespace = io.of('/caps');
capsNamespace.on('connection', (socket) => {

    socket.on('join', (vendorId) => {
    socket.join(vendorId);
  });


  socket.on('pickup', (payload) => {
    console.log(`EVENT: ${new Date().toISOString()}`);
    console.log(payload);


    socket.broadcast.emit('pickup', payload);
  });


  socket.on('in-transit', (payload) => {

    capsNamespace.to(payload.store).emit('in-transit', payload);
  });


  socket.on('delivered', (payload) => {

    capsNamespace.to(payload.store).emit('delivered', payload);
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Socket.io server running on port ${PORT}`);
});
