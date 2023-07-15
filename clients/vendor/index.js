const io = require('socket.io-client');
const socket = io.connect('http://localhost:3000/caps');


const storeName = '1-206-flowers';
socket.emit('join', storeName);


setInterval(() => {
  const payload = {
    store: storeName,
    orderId: generateOrderId(),
    customer: generateCustomerName(),
    address: generateAddress(),
  };
  socket.emit('pickup', payload);
}, 5000);


socket.on('delivered', (payload) => {
  console.log(`VENDOR: Thank you for your order ${payload.customer}`);
});


function generateOrderId() {

}

function generateCustomerName() {

}

function generateAddress() {

}
