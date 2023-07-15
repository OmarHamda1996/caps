const io = require('socket.io-client');
const socket = io.connect('http://localhost:3000/caps');

socket.on('pickup', (payload) => {
  console.log(`DRIVER: picked up ${payload.orderId}`);

  simulateInTransit(payload);
});


function simulateInTransit(payload) {
  console.log(`DRIVER: delivered ${payload.orderId}`);
  socket.emit('in-transit', payload);
  setTimeout(() => {
    socket.emit('delivered', payload);
  }, 3000);
}
