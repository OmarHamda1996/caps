const globalEventPool = require('../hub');

function handlePickup(payload) {
  console.log(`DRIVER: Pickup event received for order ${payload.orderId}`);
  globalEventPool.emit('in-transit', payload);
}

function handleDelivery(payload) {
  console.log(`DRIVER: Delivery event received for order ${payload.orderId}`);
  globalEventPool.emit('delivered', payload);
}

module.exports = {
  handlePickup,
  handleDelivery,
};
